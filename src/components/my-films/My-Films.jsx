/* eslint-disable no-loop-func */
import React, { useEffect, useState } from "react"; // импортируем React

import "./My-Films.scss"; // импортируем стили компонента

import dataMyFilms from "./../../DATAS/MyFilms.json"; // импортируем наш массив с названиями и годами фильмов

function MyFilms() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stateFilms, setFilmsState] = useState([]);
  let test123 = 0;

  let arrayFilms = [];

  useEffect(() => {
    setFilmsState([]);

    componentStart(setIsLoaded, error, setError, arrayFilms, setFilmsState);
  }, []); // когда компонент смонтируется, запустим функцию

  if (error) {
    return (
      <div className="MyFilms">
        <h4>Ошибка загрузки любимых фильмов, обновите страницу!</h4>
        <p>{error}</p>
      </div>
    );
  } else if (!isLoaded) {
    // загрузка

    return (
      <div className="MyFilms">
        <h4>Загружаются мои любимые фильмы...</h4>
      </div>
    );
  } else {
    // все хорошо

    return (
      <div className="MyFilms">
        <h4>Любимые фильмы:</h4>
        <br />
        <div>
          {stateFilms.map(function (filmState) {
            test123++;
            return (
              <div>
                <div>
                  <h1>
                    {filmState.nameRu} | {filmState.nameEn}
                  </h1>
                  <img src={filmState.posterUrl} alt={filmState.nameRu} />
                  <p>{filmState.description}</p>
                  <p>
                    Жанр:{" "}
                    {filmState.genres.map(function (genre) {
                      return <span>{genre.genre}, </span>;
                    })}
                  </p>
                  <p>Рейтинг: {filmState.rating}</p>
                  <p>Год: {filmState.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyFilms;

function componentStart(
  setIsLoaded,
  error,
  setError,
  arrayFilms,
  setFilmsState
) {
  // когда компонент смонтируется, запустим функцию

  for (let i = 0; i < dataMyFilms.length; i++) {
    // бегаем по нашему массиву с фильмами

    let tempLocalNameFilm = dataMyFilms[i].nameRu;
    let tempLocalNameENGFilm = null;
    let tempLocalYearFilm = dataMyFilms[i].year;
    // получили во временные переменные наше название фильма и год для текущей итерации

    if (dataMyFilms[i].hasOwnProperty("nameEn")) {
      tempLocalNameENGFilm = dataMyFilms[i].nameEn;
    }

    if (!error) {
      let promiseQueryThisFilm = new Promise((resolve, reject) => {
        // инициализация промиса для асинхронной работы
        // создаем задержку чтобы не спамить бэк дохрелионом запросов
        setTimeout(
          fetchThisFilm, // функция
          i * 200, // задержка
          tempLocalNameFilm, // название фильма
          tempLocalNameENGFilm, // eng name
          tempLocalYearFilm, // год фильма
          i, // номер итерации
          setIsLoaded, // хук Lazzy Loading
          setError, // хук error
          arrayFilms, // массив фильмов
          setFilmsState // хук фильмов
        );
      });
    }
  }
}

async function fetchThisFilm(
  localNameFilm,
  localNameENGFilm,
  localYearFilm,
  localIDFilm,
  setIsLoaded,
  setError,
  arrayFilms,
  setFilmsState
) {
  // функция запустится для каждого фильма из нашего массива

  try {
    let queryFetch = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${localNameFilm}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "948aac51-8d03-4f10-8663-c19fe7f7eed9",
          "Content-Type": "application/json",
        },
      }
    );

    if (!queryFetch.ok) {
      setError(`Ошибка загрузки фильмов: ${queryFetch.status}`);
    } else {
      let responseJSON = await queryFetch.json();

      // eslint-disable-next-line array-callback-return
      responseJSON.films.map((itemResponse) => {
        let reqNameFilm = itemResponse.nameRu; // из полученного массива для каждого из фильмов сохраняем во временную переменную название фильма
        let reqNameENGFilm = itemResponse.nameEn;
        let reqYearFilm = itemResponse.year; // и год тоже

        if (
          (localNameFilm === reqNameFilm &&
            localYearFilm === reqYearFilm &&
            localNameENGFilm !== null &&
            localNameENGFilm === reqNameENGFilm) ||
          (localNameFilm === reqNameFilm &&
            localYearFilm === reqYearFilm &&
            localNameENGFilm === null)
        ) {
          console.log(itemResponse, localNameFilm, localYearFilm, localIDFilm);

          // setFilmsState((state) => [...state, itemResponse]);
          arrayFilms.push(itemResponse);

          if (localIDFilm + 1 === dataMyFilms.length) {
            setIsLoaded(true);
            setFilmsState(arrayFilms);
          }
        }
      });
    }
  } catch (error) {
    setError(`Ошибка загрузки фильмов: ${error}`);
  }
  // finally {}
}
