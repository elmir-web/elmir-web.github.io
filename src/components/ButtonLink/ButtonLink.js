import "./ButtonLink.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ButtonLink(props) {
  return (
    <Link to={props.linkHref}>
      <button
        className="ButtonLink"
        style={{ marginTop: Number(props.marginTop) }}
      >
        {props.linkName}
      </button>
    </Link>
  );
}

export default ButtonLink;
