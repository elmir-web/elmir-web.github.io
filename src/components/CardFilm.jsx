import React, { useEffect } from "react";

import FilmPopup from "./FilmPopup";

const CardFilm = ({ filmInfo, callbackClickPopup }) => {
  let kinopoiskClickLinkToFilm = `https://www.kinopoisk.ru/film/${filmInfo.filmId}`;

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
            callbackClickPopup(filmInfo);
          }}
          // onClick={
          // () => {
          // window.alert("click");
          // document.querySelector(".FilmInfoPressPopup").style.display =
          // "block";
          // let filmPopup = document.querySelector(`.${popupClassUniqueName}`);
          // filmPopup.style.display = "block";
          // }
          // }
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

      {/* <div className="FilmInfoPressPopup">
        <FilmPopup filmInfo={filmInfo} />
      </div> */}
    </div>
  );
};

export default CardFilm;
