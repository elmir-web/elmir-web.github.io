import React, { useEffect } from "react";

const FilmPopup = ({ filmInfo, setPopupActiv }) => {
  let kinopoiskClickLinkToFilm = `https://www.kinopoisk.ru/film/${filmInfo.filmId}/`;
  useEffect(() => {
    // window.alert(JSON.stringify(filmInfo, null, 2));
  }, []);

  return (
    <div className="FilmPopup">
      <div className="InfoPopup">
        <div className="PopupHead">
          Информация о фильме: {filmInfo.nameRu}
          <button
            className="PopupClose"
            onClick={() => {
              setPopupActiv(false);
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
  );
};

export default FilmPopup;
