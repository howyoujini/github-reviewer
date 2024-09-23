import React from "react";
import "./styles.css";

export default function NavButton({ text, isActive, onClick, testId }) {
  return (
    <button
      className={`nav-button ${isActive ? "active" : ""}`}
      onClick={(ev) => {
        ev.preventDefault();
        onClick();
      }}
      data-test={testId}
    >
      {text}
    </button>
  );
}
