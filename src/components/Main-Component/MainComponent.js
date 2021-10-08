import "./MainComponent.scss";

import LandingOne from "./Landing-One/Landing-One";
import LandingTwo from "./Landing-Two/Landing-Two";
import LandingThree from "./Landing-Three/Landing-Three";
import LandingFour from "./Landing-Four/Landing-Four";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function MainComponent() {
  return (
    <div className="MainComponent">
      <LandingOne />
      {/* <LandingTwo />
      <LandingThree />
      <LandingFour /> */}
    </div>
  );
}

export default MainComponent;
