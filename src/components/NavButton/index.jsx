import PropTypes from "prop-types";
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

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};
