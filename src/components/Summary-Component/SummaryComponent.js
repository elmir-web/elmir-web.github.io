import "./SummaryComponent.scss";

import Navigation from "./../Navigation/Navigation";

function SummaryComponent() {
  return (
    <div className="Summary-Component">
      <header>
        <Navigation selectedPage="2" />
      </header>
      <main></main>
    </div>
  );
}

export default SummaryComponent;
