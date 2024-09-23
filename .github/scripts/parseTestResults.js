import fs from "fs/promises";
import * as core from "@actions/core";

const REPORT_PATH = "cypress/reports/mochawesome.json";
const { GITHUB_ACTOR, GITHUB_PR_URL } = process.env;

const formatRate = (rate) => {
  return `${rate.toFixed(2)}%`;
};

const createSlackMessage = (testSummary, testDetails) => {
  const { passes, failures, skipped, passPercent } = testSummary;

  const testBlocks = testDetails.flatMap((suite) =>
    suite.tests.map(({ fullTitle, pass }) => ({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `${pass ? ":white_check_mark:" : ":x:"}  ${fullTitle}\n`,
      },
    }))
  );

  return {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `:memo: ${GITHUB_ACTOR} 님의 과제 테스트 실행 결과`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*<${GITHUB_PR_URL}|:link: PR로 이동하기>*\n`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `:bar_chart: 테스트 실행 결과 요약`,
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Passed Tests:*\n${passes}`,
          },
          {
            type: "mrkdwn",
            text: `*Failed Tests:*\n${failures}`,
          },
          {
            type: "mrkdwn",
            text: `*Skipped Tests:*\n${skipped}`,
          },
          {
            type: "mrkdwn",
            text: `*Pass Rate(%):*\n${formatRate(passPercent)}`,
          },
        ],
      },
      {
        type: "divider",
      },
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `:memo: 테스트 실행 결과 상세`,
        },
      },
      ...testBlocks,
    ],
  };
};

const createGitHubComment = (testSummary, testDetails) => {
  const { tests, passes, failures, skipped, passPercent } = testSummary;

  const overallMetrics = `
## 테스트 실행 결과

### 결과 요약

| Metric             | Value             |
|--------------------|-------------------|
| **Total Tests**    | ${tests}  |
| **Passed Tests**   | ${passes} |
| **Failed Tests**   | ${failures} |
| **Skipped Tests**  | ${skipped} |
| **Pass Rate**      | ${formatRate(passPercent)} |
`;

  const detailedMetricsHeader = `
### 결과 상세

| Test Name       | Result             |
|-----------------|--------------------|
`;

  const detailedMetrics = testDetails
    .flatMap((suite) =>
      suite.tests.map(({ fullTitle, pass }) => {
        return `| ${fullTitle} | ${pass ? "✅" : "❌"} |`;
      })
    )
    .join("\n");

  return overallMetrics + detailedMetricsHeader + detailedMetrics;
};

const processReport = (data) => {
  const report = JSON.parse(data);

  const {
    tests,
    passes,
    failures,
    skipped: skippedFromReport,
    pending,
  } = report.stats;

  const testSummary = {
    tests,
    passes,
    failures,
    skipped: (skippedFromReport || 0) + (pending || 0),
    passPercent: report.stats.passPercent,
  };

  const extractTests = (suites) =>
    suites.flatMap((suite) =>
      suite.suites.length > 0 ? extractTests(suite.suites) : suite
    );

  const testDetails = extractTests(report.results[0]?.suites || []);

  return { testSummary, testDetails };
};

const main = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const { testSummary, testDetails } = processReport(data);

    const gitHubComment = createGitHubComment(testSummary, testDetails);
    const slackMessage = createSlackMessage(testSummary, testDetails);

    core.setOutput("githubComment", gitHubComment);
    core.setOutput("slackMessage", slackMessage);
  } catch (error) {
    console.error("Error reading the JSON file:", error);
  }
};

main(REPORT_PATH);
