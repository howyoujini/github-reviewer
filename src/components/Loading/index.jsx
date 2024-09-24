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
    <p className="content" data-test="ui-loading">
      {content}
    </p>
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
