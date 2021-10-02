import "./About.scss";

import Navigation from "./../Navigation/Navigation";

function About() {
  return (
    <div className="About-Component">
      <header>
        <Navigation className="Navigation" selectedPage="5" />
      </header>
      <main></main>
    </div>
  );
}

export default About;
