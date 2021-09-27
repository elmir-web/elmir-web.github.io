import "./Landing-One.scss";

function LandingOne() {
  return (
    <div className="Landing-One">
      <header>
        <span className="job-position">
          Frontend-<span>разработчик</span>
        </span>
      </header>

      <main>
        <div className="mini-description">
          <span className="desc_name">
            Elmir Web,
            <br />
            Студент
            <br />
            Junior Web-developer
          </span>

          <p>
            23 года.
            <br />
            Оренбургский Гос. Университет, 4-й курс. Программная инженерия.
            <br />
            Думайте и обучайтесь, никому слепо не верьте. Скупой платит дважды;
            Дурак трижды; А человек, которому лень думать, будет платить
            постоянно.
          </p>

          <a href="#" className="a-link-button">
            Подробная информация
          </a>
        </div>
        <div className="block-photo">PHOTO</div>
        <div className="block-decoration"></div>
      </main>
    </div>
  );
}

export default LandingOne;
