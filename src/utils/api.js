import PROFILE from "./profile.json";
import PERSONAL_REPOS from "./personalRepositories.json";
import POPULAR_REPOS from "./popularRepositories.json";
import { GITHUB } from "../../env";

const defaultParams = `?client_id=${GITHUB._CLIENT_ID}&client_secret=${GITHUB._SECRET_ID}`;

function getErrorMsg(message, username) {
  if (message === "Not Found") {
    return `"${username}"는 존재하지 않는 사용자입니다`;
  }

  return message;
}

function request(uri) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        resolve(xhr.responseText);
      }
    };

    xhr.open("GET", uri, true);
    xhr.send(null);
  });
}

function getProfile(username) {
  return request(
    `https://api.github.com/users/${username}${defaultParams}`
  ).then((profile) => {
    if (profile.message) {
      throw new Error(getErrorMsg(profile.message, username));
    }

    return profile;
  });
}

function getRepos(username) {
  return request(
    `https://api.github.com/users/${username}/repos${defaultParams}&per_page=100`
  ).then((repos) => {
    if (repos.message) {
      throw new Error(getErrorMsg(repos.message, username));
    }

    return repos;
  });
}

function getStarCount(repos) {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
}

function calculateScore(followers, repos) {
  return followers * 3 + getStarCount(repos);
}

async function getUserData(player) {
  const profile = await getProfile(player);
  const repos = await getRepos(player);

  return {
    profile,
    score: calculateScore(profile.followers, repos),
  };
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export async function battle([player1, player2]) {
  const playerOne = await getUserData(player1);
  const playerTwo = await getUserData(player2);

  return sortPlayers([playerOne, playerTwo]);
}

export async function getPopularRepos(language) {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories${defaultParams}&q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  const res = await fetch(endpoint);
  const { items } = await res.json();

  return items.map((item) => {
    const { full_name, clone_url, watchers_count, forks_count, language } =
      item;
    const { login } = item.owner;

    return {
      name: full_name,
      owner: login,
      gitUrl: clone_url,
      followersCount: watchers_count,
      forksCount: forks_count,
      language: language,
    };
  });
}
