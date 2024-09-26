import { useState } from "react";
import Popular from "../Popular";
import Battle from "../Battle";
import BattleProvider from "../../provider/BattleProvider";
import NavButton from "../NavButton";
import "./styles.css";

export default function App() {
  const [showBattle, setShowBattle] = useState(false);

  function toggleView(showBattle) {
    setShowBattle(showBattle);
  }

  return (
    <BattleProvider>
      <div className="container">
        <div className="flex">
          <NavButton
            isActive={!showBattle}
            text="Trending Repository"
            onClick={() => toggleView(false)}
            testId="btn-popular"
          />
          <NavButton
            isActive={showBattle}
            text="Github Match!"
            onClick={() => toggleView(true)}
            testId="btn-battle"
          />
        </div>
        {!showBattle && <Popular />}
        {showBattle && <Battle />}
      </div>
    </BattleProvider>
  );
}
