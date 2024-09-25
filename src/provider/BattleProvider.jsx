import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const BattleContext = createContext();

export default function BattleProvider({ children }) {
  const previousContext = useState({}); // [primitiveValue, callback]

  console.log("BattleProvider", previousContext);

  return (
    <BattleContext.Provider value={previousContext}>
      {children}
    </BattleContext.Provider>
  );
}

BattleProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
