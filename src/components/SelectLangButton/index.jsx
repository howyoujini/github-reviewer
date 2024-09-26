import PropTypes from "prop-types";
import "./styles.css";

export default function SelectLangButton({
  name,
  selected,
  onSelectLanguage,
  testId,
}) {
  return (
    <button
      className={`select-lang-button ${selected ? "selected" : ""}`}
      onClick={(event) => {
        event.preventDefault();
        onSelectLanguage();
      }}
      data-test={testId}
    >
      {name}
    </button>
  );
}

SelectLangButton.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelectLanguage: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};
