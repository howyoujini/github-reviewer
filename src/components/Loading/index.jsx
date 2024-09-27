import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function Loading({ speed, text }) {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const intervalID = setInterval(() => {
      content === text + "..." ? setContent(text) : setContent(content + ".");
    }, speed);

    return () => clearInterval(intervalID);
  }, [content, speed, text]);

  return (
    <span className="content" data-test="ui-loading">
      <img
        src="https://github.githubassets.com/assets/mona-loading-default-c3c7aad1282f.gif"
        alt="Loading your activity..."
        className="loading-motion"
      />
      <p className="loading-text">{content}</p>
    </span>
  );
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};
