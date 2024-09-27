import PropTypes from "prop-types";
import "./styles.css";

export default function TrendingRepositoryCard({
  index,
  name,
  owner,
  gitUrl,
  followersCount,
  forksCount,
  language = "",
  starCount = 0,
  openIssues = 0,
}) {
  return (
    <div className="trending-card">
      <a href={gitUrl} target="_blank" rel="noreferrer">
        <h2 className="trending-card-name">{name}</h2>
      </a>
      <span className="owner-name">
        <p>{owner}</p>
      </span>
      <div className="info-wrapper">
        <span>
          <img
            className="svg-followers"
            src="/src/assets/followers-icon.svg"
            alt="followers"
          />
          <p className="svg-followers-count">
            {followersCount.toLocaleString()}
          </p>
          <p>followers</p>
        </span>
        <span data-test={`list-forks-${index}`}>
          <img
            className="svg-repo-forked"
            src="/src/assets/fork-icon.svg"
            alt="fork"
          />
          <p className="svg-forks-count">{forksCount.toLocaleString()}</p>
          <p>forks</p>
        </span>
        <span>
          <img
            className="svg-language"
            alt={language}
            src={`https://img.shields.io/badge/${language}-white?style=flat-square&logo=${language}`}
          />
        </span>
        <span data-test={`list-stars-${index}`}>
          <img
            className="svg-star"
            src="/src/assets/star-icon.svg"
            alt="star"
          />
          <p>{starCount.toLocaleString()}</p>
        </span>
        <span data-test={`list-issues-${index}`}>
          <img className="svg-issue-opened" src="/src/assets/issue-icon.svg" />
          <p>{openIssues.toLocaleString()}</p>
        </span>
      </div>
    </div>
  );
}

TrendingRepositoryCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  gitUrl: PropTypes.string.isRequired,
  followersCount: PropTypes.number.isRequired,
  forksCount: PropTypes.number.isRequired,
  language: PropTypes.string,
  starCount: PropTypes.number,
  openIssues: PropTypes.number,
};
