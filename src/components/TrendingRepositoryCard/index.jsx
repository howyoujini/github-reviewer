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
        <h2>{name}</h2>
      </a>
      <span>{owner}</span>
      <span>{followersCount.toLocaleString()}</span>
      <span data-test={`list-forks-${index}`}>
        {forksCount.toLocaleString()}
      </span>
      <span>{language}</span>
      <span data-test={`list-stars-${index}`}>
        {starCount.toLocaleString()}
      </span>
      <span data-test={`list-issues-${index}`}>
        {openIssues.toLocaleString()}
      </span>
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
