import PropTypes from "prop-types";
import "./styles.css";

export default function ErrorMessage({ message, testId }) {
  return (
    <div className="error-ui" data-test={testId}>
      <img id="error" src="/src/assets/error-icon.svg" alt="error" />
      <p className="error-message">{message}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  testId: PropTypes.string,
};
