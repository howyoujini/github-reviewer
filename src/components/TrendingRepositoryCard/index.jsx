import PropTypes from "prop-types";

export default function TrendingRepositoryCard({
  name,
  owner,
  gitUrl,
  followersCount,
  forksCount,
}) {
  return (
    <div>
      <h2>{name}</h2>
      <span>owner{owner}</span>
      <a href={gitUrl} target="_blank" rel="noreferrer">
        {gitUrl}
      </a>
      <p>{followersCount}</p>
      <p>{forksCount}</p>
    </div>
  );
}

TrendingRepositoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  gitUrl: PropTypes.string.isRequired,
  followersCount: PropTypes.number.isRequired,
  forksCount: PropTypes.number.isRequired,
};
