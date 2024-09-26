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
          // 승리
          <svg
            className="winner-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#000000"
          >
            <path d="M298-120v-60h152v-148q-54-11-96-46.5T296-463q-74-8-125-60t-51-125v-44q0-25 17.5-42.5T180-752h104v-88h392v88h104q25 0 42.5 17.5T840-692v44q0 73-51 125t-125 60q-16 53-58 88.5T510-328v148h152v60H298Zm-14-406v-166H180v44q0 45 29.5 78.5T284-526Zm196 141q57 0 96.5-40t39.5-97v-258H344v258q0 57 39.5 97t96.5 40Zm196-141q45-10 74.5-43.5T780-648v-44H676v166Zm-196-57Z" />
          </svg>
        ) : (
          // 패배
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#000000"
          >
            <path d="M250-320h60v-10q0-71 49.5-120.5T480-500q71 0 120.5 49.5T650-330v10h60v-10q0-96-67-163t-163-67q-96 0-163 67t-67 163v10Zm34-270q41-6 86.5-32t72.5-59l-46-38q-20 24-55.5 44T276-650l8 60Zm392 0 8-60q-30-5-65.5-25T563-719l-46 38q27 33 72.5 59t86.5 32ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.38 0 241.19-98.81Q820-337.63 820-480q0-142.38-98.81-241.19T480-820q-142.37 0-241.19 98.81Q140-622.38 140-480q0 142.37 98.81 241.19Q337.63-140 480-140Z" />
          </svg>
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
        <span>{`${name}`}</span>
        <span>{`LOCAL |  ${location}`}</span>
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
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="16"
            height="16"
            fill="#5f6368"
            className="svg-followings"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
          </svg>
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
