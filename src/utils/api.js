import { GITHUB } from "../../env";

const defaultParams = `?client_id=${GITHUB._CLIENT_ID}&client_secret=${GITHUB._SECRET_ID}`;

const getErrorMsg = (message, username) =>
  message === "Not Found"
    ? `"${username}"는 존재하지 않는 사용자입니다.`
    : message;

const makeEndPoint = (url) => window.encodeURI(url);

async function getProfile(username) {
  const url = `https://api.github.com/users/${username}${defaultParams}`;
  const response = await fetch(makeEndPoint(url));

  if (!response.ok) {
    throw new Error(response.status);
  }

  const profile = await response.json();

  if (profile.message) {
    throw new Error(getErrorMsg(profile.message, username));
  }

  return profile;
}

async function getRepos(username) {
  const url = `https://api.github.com/users/${username}/repos${defaultParams}&per_page=100`;
  const response = await fetch(makeEndPoint(url));

  if (!response.ok) {
    throw new Error(response.status);
  }

  const repos = await response.json();

  if (repos.message) {
    throw new Error(getErrorMsg(repos.message, username));
  }

  return repos;
}

const getStarCount = (repos) =>
  repos.reduce((count, { stargazers_count }) => count + stargazers_count, 0);

const calculateScore = (followers, repos) =>
  followers * 3 + getStarCount(repos);

async function getUserData(player) {
  const [profile, repos] = await Promise.all([
    getProfile(player),
    getRepos(player),
  ]);

  return {
    profile,
    score: calculateScore(profile.followers, repos),
  };
}

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);

export async function battle([player1, player2]) {
  const [playerOne, playerTwo] = await Promise.all([
    getUserData(player1),
    getUserData(player2),
  ]);

  return sortPlayers([playerOne, playerTwo]);
}

export async function getPopularRepos(language) {
  const url = `https://api.github.com/search/repositories${defaultParams}&q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
  const res = await fetch(makeEndPoint(url));

  if (!res.ok) {
    throw new Error("네트워크 응답이 OK가 아님");
  }

  const { items } = await res.json();

  if (items === undefined) {
    throw new Error("JSON 파싱 오류");
  }

  return items.map((item) => {
    const {
      full_name,
      clone_url,
      watchers_count,
      forks,
      language,
      stargazers_count,
      open_issues,
    } = item;
    const { login } = item.owner;

    return {
      name: full_name,
      owner: login,
      gitUrl: clone_url,
      followersCount: watchers_count,
      forksCount: forks,
      language: language,
      starCount: stargazers_count,
      openIssues: open_issues,
    };
  });
}
