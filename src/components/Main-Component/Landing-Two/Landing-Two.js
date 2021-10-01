import "./Landing-Two.scss";

import ButtonLink from "./../../ButtonLink/ButtonLink";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function LandingTwo() {
  return (
    <div className="Landing-Two">
      <header>
        <span className="span-header-name">Крайние работы</span>
        <p className="p-header-text">Шесть крайних работ из портфолио</p>
      </header>
      <main>
        <div className="cards-portfolio">
          <div className="card card-1">1</div>
          <div className="card card-1">2</div>
          <div className="card card-1">3</div>
          <div className="card card-1">4</div>
          <div className="card card-1">5</div>
          <div className="card card-1">6</div>
        </div>

        <ButtonLink linkHref="/portfolio" linkName="Портфолио" marginTop="30" />
        <div className="block-decoration"></div>
      </main>
    </div>
  );
}

export default LandingTwo;
