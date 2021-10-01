import "./Navigation.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function Navigation(props) {
  let linkStyleSelected = {
    pointerEvents: "none",
    borderBottom: "2px solid #fff",
  };

  let punktMainSelected = (
    <NavLink to="/" style={linkStyleSelected}>
      <a>Главная</a>
    </NavLink>
  );
  let punktSummarySelected = (
    <NavLink to="/summary" style={linkStyleSelected}>
      <a>Резюме</a>
    </NavLink>
  );
  let punktPortfolioSelected = (
    <NavLink to="/portfolio" style={linkStyleSelected}>
      <a>портфолио</a>
    </NavLink>
  );
  let punktAboutSelected = (
    <NavLink to="/about" style={linkStyleSelected}>
      <a>О сайте</a>
    </NavLink>
  );
  let punktInterestsSelected = (
    <NavLink to="/interests" style={linkStyleSelected}>
      <a>интересы</a>
    </NavLink>
  );
  let punktMain = (
    <NavLink to="/">
      <a>Главная</a>
    </NavLink>
  );
  let punktSummary = (
    <NavLink to="/summary">
      <a>Резюме</a>
    </NavLink>
  );
  let punktPortfolio = (
    <NavLink to="/portfolio">
      <a>портфолио</a>
    </NavLink>
  );
  let punktInterests = (
    <NavLink to="/interests">
      <a>интересы</a>
    </NavLink>
  );
  let punktAbout = (
    <NavLink to="/about">
      <a>О сайте</a>
    </NavLink>
  );

  return (
    <div className="Navigation">
      <nav>
        {Number(props.selectedPage) === 1 ? punktMainSelected : punktMain}
        {Number(props.selectedPage) === 2 ? punktSummarySelected : punktSummary}
        {Number(props.selectedPage) === 3
          ? punktPortfolioSelected
          : punktPortfolio}
        {Number(props.selectedPage) === 4
          ? punktInterestsSelected
          : punktInterests}
        {Number(props.selectedPage) === 5 ? punktAboutSelected : punktAbout}
      </nav>
    </div>
  );
}

export default Navigation;
