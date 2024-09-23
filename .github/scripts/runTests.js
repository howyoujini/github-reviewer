import cypress from "cypress";

const runCypressTests = async () => {
  const options = {
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      json: true,
      charts: true,
      overwrite: true,
      html: false,
    },
    config: {
      screenshotOnRunFailure: false,
    },
  };

  try {
    await cypress.run(options);
  } catch (error) {
    console.error("Error running Cypress tests:", error);
  }
};

const main = () => {
  runCypressTests();
};

main();
