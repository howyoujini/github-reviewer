import { useContext } from "react";
import { BattleContext } from "../provider/BattleProvider";

/**
 * 배틀 결과값을 전역 상태로 보존하는 custom hooks 입니다.
 * @returns [state, setState];
 */
export default function useBattleState() {
  const useBattle = useContext(BattleContext);

  if (useBattle === undefined) {
    throw new Error("배틀 상태에서 에러 났습니다.");
  }

  return useBattle;
}
