import PropTypes from "prop-types";

export default function ErrorMessage({ message, testId }) {
  return <p data-test={testId}>{message}</p>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  testId: PropTypes.string,
};
