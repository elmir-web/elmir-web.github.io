import "./Landing-Three.scss";

import ActivityImg from "./assets/1.activity.png";
import InterestsImg from "./assets/2.interests.png";
import MusicImg from "./assets/3.music.png";
import FilmsImg from "./assets/4.films.png";
import BooksImg from "./assets/5.books.png";
import GamesImg from "./assets/6.games.png";
import QuotesImg from "./assets/7.quotes.png";
import AbousImg from "./assets/8.about.png";

import ButtonLink from "./../../ButtonLink/ButtonLink";

function LandingThree() {
  return (
    <div className="Landing-Three">
      <header>
        <span className="interests-name">Мой уголок</span>
      </header>
      <main>
        <div className="interests-cards">
          <div className="row-one">
            <div className="int-card int-card1">
              <div className="img-wrapper">
                <img src={ActivityImg} className="int-img" />
              </div>

              <p className="img-name">деятельность</p>
            </div>

            <div className="int-card int-card2">
              <div className="img-wrapper">
                <img src={InterestsImg} className="int-img" />
              </div>

              <p className="img-name">интересы</p>
            </div>

            <div className="int-card int-card3">
              <div className="img-wrapper">
                <img src={MusicImg} className="int-img" />
              </div>

              <p className="img-name">музыка</p>
            </div>

            <div className="int-card int-card4">
              <div className="img-wrapper">
                <img src={FilmsImg} className="int-img" />
              </div>

              <p className="img-name">фильмы</p>
            </div>
          </div>
          <div className="row-two">
            <div className="int-card int-card5">
              <div className="img-wrapper">
                <img src={BooksImg} className="int-img" />
              </div>

              <p className="img-name">книги</p>
            </div>

            <div className="int-card int-card6">
              <div className="img-wrapper">
                <img src={GamesImg} className="int-img" />
              </div>

              <p className="img-name">игры</p>
            </div>

            <div className="int-card int-card7">
              <div className="img-wrapper">
                <img src={QuotesImg} className="int-img" />
              </div>

              <p className="img-name">цитаты</p>
            </div>

            <div className="int-card int-card8">
              <div className="img-wrapper">
                <img src={AbousImg} className="int-img" />
              </div>

              <p className="img-name">обо мне</p>
            </div>
          </div>
        </div>

        <ButtonLink linkHref="/interests" linkName="Обо мне" marginTop="70" />

        <div className="block-decoration"></div>
      </main>
    </div>
  );
}

export default LandingThree;
