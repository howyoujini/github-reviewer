import PropTypes from "prop-types";
import { useState } from "react";
import { battle } from "../../utils/api";
import MatchResultCard from "../MatchResultCard";
import Loading from "../Loading";

import useBattleState from "../../hooks/useBattleState";

export default function Battle() {
  const [user1Name, setUser1Name] = useState("");
  const [user2Name, setUser2Name] = useState("");
  const [message, setMessage] = useState("");
  const [winner, setWinner] = useState({});
  const [loser, setLoser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [previous, setUpdate] = useBattleState();

  const onMatch = async () => {
    if (user1Name === "" || user2Name === "") {
      setMessage("사용자 이름을 모두 입력해주세요.");
    } else {
      setMessage("");
      setIsLoading(true);

      const [winner, loser] = await battle([user1Name, user2Name]);

      setUpdate({ winner: winner, loser: loser });

      setWinner(winner);
      setLoser(loser);
      setIsLoading(false);
      setIsLoaded(true);
    }
  };

  return (
    <>
      <div data-test="ui-battle">
        <h1 className="center-text">This is Battle!</h1>
      </div>
      <UserNameInput id={1} onChange={setUser1Name} />
      <UserNameInput id={2} onChange={setUser2Name} />
      <button type="submit" onClick={onMatch}>
        대결
      </button>
      <p>{message}</p>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isLoaded ? (
            <>
              <MatchResultCard
                score={winner.score}
                isWinner={true}
                user={winner.profile}
              />
              <MatchResultCard
                score={loser.score}
                isWinner={false}
                user={loser.profile}
              />
            </>
          ) : (
            <>
              {previous.winner === undefined ? (
                <p>결과 없음</p>
              ) : (
                <>
                  <MatchResultCard
                    score={previous.winner.score}
                    isWinner={true}
                    user={previous.winner.profile}
                  />
                  <MatchResultCard
                    score={previous.loser.score}
                    isWinner={false}
                    user={previous.loser.profile}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

function UserNameInput({ id, onChange }) {
  return (
    <input
      type="text"
      id={`player${id}`}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

UserNameInput.propTypes = {
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
