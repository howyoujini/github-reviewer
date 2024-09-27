import PropTypes from "prop-types";
import "./styles.css";

export default function MatchResultCard({ score, isWinner, user }) {
  const avatar = user.avatar_url ?? " ";
  const githubUserName = user.login;
  const name = user.name ?? " ";
  const location = user.location ?? " ";
  const followersCount = user.followers;
  const followingCount = user.following;
  const repositoryCount = user.public_repos;

  return (
    <div className="card">
      <p className="match-icon">
        {isWinner ? (
          <img
            className="winner-icon"
            src="/src/assets/winner-icon.svg"
            alt="winner"
          />
        ) : (
          // 패배
          <img src="/src/assets/loser-icon.svg" alt="loser" />
        )}
      </p>
      <a
        href={`https://github.com/${githubUserName}`}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="github-username">{`${githubUserName}`}</h2>
      </a>
      <div className="image-cropper">
        <img className="avatar" src={avatar} alt={`Avatar for ${name}`} />
      </div>
      <div className="match-info-wrapper">
        <span>{`SCORE |  ${score}`}</span>
        <span>{name === " " ? "-" : `${name}`}</span>
        <span>{location === " " ? "-" : `LOCAL |  ${location}`}</span>
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
        <span>
          <img
            className="svg-followings"
            src="/src/assets/followings-icon.svg"
            alt="followings"
          />
          <p className="svg-followings-count">
            {`${followingCount.toLocaleString()}`}
          </p>
          <p>followings</p>
        </span>
        <span>{`REPO |  ${repositoryCount.toLocaleString()}`}</span>
      </div>
    </div>
  );
}

MatchResultCard.propTypes = {
  isWinner: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};
