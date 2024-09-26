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
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="svg-followers"
          >
            <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
          </svg>
          <p className="svg-followers-count">
            {followersCount.toLocaleString()}
          </p>
          <p>followers</p>
        </span>
        <span data-test={`list-forks-${index}`}>
          <svg
            aria-label="fork"
            role="img"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="svg-repo-forked"
          >
            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
          </svg>
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
          <svg
            aria-label="star"
            role="img"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="svg-star"
          >
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
          </svg>
          <p>{starCount.toLocaleString()}</p>
        </span>
        <span data-test={`list-issues-${index}`}>
          <svg
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
            className="svg-issue-opened"
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
          </svg>
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
