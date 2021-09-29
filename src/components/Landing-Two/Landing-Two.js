import "./Landing-Two.scss";

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

        <a href="#" className="a-link-button">
          Показать все портфолио
        </a>
        <div className="block-decoration"></div>
      </main>
    </div>
  );
}

export default LandingTwo;
