import PropTypes from "prop-types";
import "./styles.css";

export default function SelectLangButton({ name, selected, onSelectLanguage }) {
  return (
    <button
      className={`select-lang-button ${selected ? "active" : ""}`}
      onClick={(event) => {
        event.preventDefault();
        onSelectLanguage();
      }}
    >
      {name}
    </button>
  );
}

SelectLangButton.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelectLanguage: PropTypes.func.isRequired,
};
