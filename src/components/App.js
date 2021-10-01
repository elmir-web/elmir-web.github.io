import "./App.scss";

import MainComponent from "./Main-Component/MainComponent";
import SummaryComponent from "./Summary-Component/SummaryComponent";
import PortfolioComponent from "./Portfolio-Component/Portfolio";
import InterestsComponent from "./Interests-Component/Interests";
import AboutComponent from "./About-Component/About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainComponent />
        </Route>

        <Route exact path="/summary">
          <SummaryComponent />
        </Route>

        <Route exact path="/portfolio">
          <PortfolioComponent />
        </Route>

        <Route exact path="/interests">
          <InterestsComponent />
        </Route>

        <Route exact path="/about">
          <AboutComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
