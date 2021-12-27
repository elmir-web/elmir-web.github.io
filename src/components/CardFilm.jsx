import React, { useEffect } from "react";

const CardFilm = ({ filmInfo }) => {
  let kinopoiskClickLinkToFilm = `https://www.kinopoisk.ru/film/${filmInfo.filmId}`;
  let popupClassUniqueName = `FilmMoreInfoPopup__${filmInfo.filmId}`;
  let popupClassName = `FilmMoreInfoPopup ${popupClassUniqueName}`;

  return (
    <div className="CardFilm">
      <div className="WrapInfo">
        <div
          className="FilmPoster"
          style={{
            backgroundImage: "url(" + filmInfo.posterUrl + ")",
          }}
        ></div>

        <div
          className="FilmInfo"
          onClick={() => {
            let filmPopup = document.querySelector(`.${popupClassUniqueName}`);
            filmPopup.style.display = "block";
          }}
        >
          <div className="FilmRating">
            <span>Рейтинг {filmInfo.rating}</span>
          </div>
          <div className="Name">{filmInfo.nameRu}</div>
          <div className="Type">
            {filmInfo.type === "FILM" ? "Фильм" : "Сериал"}
          </div>
          <div className="Meta">
            <div className="genre">
              {filmInfo.genres.map((genre) => {
                return <span>{genre.genre} </span>;
              })}
            </div>
            <div className="Date"> {filmInfo.year}</div>
          </div>
        </div>
      </div>

      <div className={popupClassName} style={{ display: "none" }}>
        <div className="InfoPopup">
          <div className="PopupHead">
            Информация о фильме: {filmInfo.nameRu}
            <button
              className="PopupClose"
              onClick={() => {
                let filmPopup = document.querySelector(
                  `.${popupClassUniqueName}`
                );
                filmPopup.style.display = "none";
              }}
            >
              X
            </button>
          </div>
          <div className="PopupBody">
            <div className="AsideLeft">
              <img src={filmInfo.posterUrl} alt="" />
            </div>
            <div className="AsideRight">
              <h2>{filmInfo.nameRu}</h2>
              <h5>{filmInfo.nameEn}</h5>
              <p>
                Ссылка на KINOPOISK:{" "}
                <a href={kinopoiskClickLinkToFilm} target="_blank">
                  CLICK
                </a>
                .
                <br />
                Тип: {filmInfo.type === "FILM" ? "Фильм" : "Сериал"} <br />
                Год: {filmInfo.year}
                <br />
                Описание: {filmInfo.description}
                <br />
                Хронометраж: {filmInfo.filmLength}
                <br />
                Страна:{" "}
                {filmInfo.countries.map((country) => {
                  return <span>{country.country} </span>;
                })}
                <br />
                Жанр:{" "}
                {filmInfo.genres.map((genre) => {
                  return <span>{genre.genre} </span>;
                })}
                <br />
                Рейтинг: {filmInfo.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFilm;
