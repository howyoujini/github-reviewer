import PropTypes from "prop-types";
import "./styles.css";

export default function MatchResultCard({ score, isWinner, user }) {
  const avatar = user.avatar_url ?? "";
  const githubUserName = user.login;
  const name = user.name;
  const location = user.location ?? "";
  const followersCount = user.followers;
  const followingCount = user.following;
  const repositoryCount = user.public_repos;

  return (
    <div className="card">
      <img className="avatar" src={avatar} alt={`Avatar for ${name}`} />
      <p>{`${isWinner ? "승리" : "패배"}`}</p>
      <p>{`${score}`}</p>
      <p>{`${githubUserName}`}</p>
      <p>{`${name}`}</p>
      <p>{`${location}`}</p>
      <p>{`${followersCount}`}</p>
      <p>{`${followingCount}`}</p>
      <p>{`${repositoryCount}`}</p>
    </div>
  );
}

MatchResultCard.propTypes = {
  isWinner: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};
