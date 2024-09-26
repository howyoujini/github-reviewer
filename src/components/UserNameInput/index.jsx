import PropTypes from "prop-types";
import "./styles.css";

export default function UserNameInput({ id, onChange }) {
  return (
    <input
      className="user-name-input"
      placeholder="Please write a github ID"
      type="text"
      id={`player${id}`}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

UserNameInput.propTypes = {
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
