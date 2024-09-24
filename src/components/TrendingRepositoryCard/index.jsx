import PropTypes from "prop-types";
import "./styles.css";

export default function TrendingRepositoryCard({
  name,
  owner,
  gitUrl,
  followersCount,
  forksCount,
  language,
}) {
  return (
    <div className="trending-card">
      <a href={gitUrl} target="_blank" rel="noreferrer">
        <h2>{name}</h2>
      </a>
      <span>{owner}</span>
      <span>{followersCount}</span>
      <span>{forksCount}</span>
      <span>{language}</span>
    </div>
  );
}

TrendingRepositoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  gitUrl: PropTypes.string.isRequired,
  followersCount: PropTypes.number.isRequired,
  forksCount: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
};
