import { useState } from "react";
import { battle } from "../../utils/api";
import MatchResultCard from "../MatchResultCard";
import Loading from "../Loading";
import UserNameInput from "../UserNameInput";
import useBattleState from "../../hooks/useBattleState";
import ErrorMessage from "../ErrorMessage";
import "./styles.css";

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
      setMessage("Please write all github IDs.");
    } else {
      setMessage("");
      setIsLoading(true);

      const [winner, loser] = await battle([user1Name, user2Name]);

      setUpdate({ winner: winner, loser: loser });

      setWinner(winner);
      setLoser(loser);

      setUser1Name("");
      setUser2Name("");
      setIsLoading(false);
      setIsLoaded(true);
    }
  };

  return (
    <>
      <div className="ui-battle" data-test="ui-battle">
        {!isLoading && (
          <>
            <UserNameInput id={1} onChange={setUser1Name} />
            <UserNameInput id={2} onChange={setUser2Name} />
            <button className="match-button" type="submit" onClick={onMatch}>
              {"Let's Match"}
            </button>
          </>
        )}
        {message.length !== 0 && (
          <ErrorMessage message={message}></ErrorMessage>
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {isLoaded ? (
              <div className="cards">
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
              </div>
            ) : (
              <div className="cards">
                {previous.winner !== undefined && (
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
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
