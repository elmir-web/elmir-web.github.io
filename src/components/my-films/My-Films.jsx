import React from "react"; // импортируем React

import "./My-Films.scss"; // импортируем стили компонента
import dataMyFilms from "./../../DATAS/MyFilms.json"; // импортируем наш массив с названиями и годами фильмов

// главная функция компонента
function MyFilms() {
  const [myFilmsPack, setMyFilmsPack] = React.useState([]);

  // данный useEffect сработает при монтировании компонента всего лишь один раз
  React.useEffect(() => {
    // let testIndex = 0; // TODO: НАВЕРНОЕ ВРЕМЕННО
    let reqKinopoiskFilm = []; // массив для найденных одинаковых фильмов из нашего массива и запроса

    // бегаем по нашему массиву с названиями и годами фильмов
    for (let i = 0; i < dataMyFilms.length; i++) {
      // запишем во временные переменные название и год фильма на текущей итерации из соответствующего объекта в массиве
      let tempNameFilm = dataMyFilms[i].name_russian;
      let tempYearFilm = dataMyFilms[i].year;

      // все фильмы кроме последнего в массиве
      if (i + 1 !== dataMyFilms.length) {
        // console.log(i + 1); // выводим текущий номер итерации

        // создаем обещание, чтобы ждало
        new Promise((resolve, reject) => {
          // сделаем между запросами дистанцию
          setTimeout(async () => {
            let queryFetch = await fetch(
              `https://kinobd.ru/api/films/search/title?q=${tempNameFilm}`
            ); // отправим запрос на наше апи с названием из нашего массива и запишем ответ

            // если произошла ошибка
            if (!queryFetch.ok) {
              reject(`Ошибка ответа на запрос №${queryFetch.status}`); // зареджектим наш промис
            } /* если все хорошо и ответ пришел*/ else {
              let queryJSON = await queryFetch.json(); // запишем ответ в нашу временную переменную

              resolve(queryJSON.data);
            }
          }, 1000);
        })
          // если все хорошо и промис зарезолвился
          // eslint-disable-next-line no-loop-func
          .then((result) => {
            // console.log("все хорошо");

            // бегаем по полученному массиву для каждого из фильмов
            result.map(function (itemReqFilm) {
              let reqNameFilm = itemReqFilm.name_russian; // из полученного массива для каждого из фильмов сохраняем во временную переменную название фильма
              let reqYearFilm = itemReqFilm.year; // и год тоже

              // условие если название и год фильма из нашего массива схожи с названием и годом фильма из полученного массива
              if (
                tempNameFilm === reqNameFilm &&
                tempYearFilm === reqYearFilm
              ) {
                /* то */
                // testIndex++;

                // console.log(`_______ | ${testIndex} ______`);
                // console.log(reqNameFilm, reqYearFilm);
                // console.log("_____________");

                reqKinopoiskFilm.push(itemReqFilm);
              }

              /*else {
              }*/
            });

            setMyFilmsPack(reqKinopoiskFilm);
          })
          // отловим нашу ошибку
          .catch((errResponse) => {
            // выведем ошибку в консоль если промис зареджектился
            console.log(errResponse);
          });
      } /* последний фильм в массиве */ else {
        console.log(`все ${i + 1}`);
      }
    }
  }, []);

  myFilmsPack.map(function (item) {
    console.log(item);
  });

  return (
    <div className="MyFilms">
      <h4>Мои любимые фильмы</h4>
      {/* <pre>{JSON.stringify(dataMyFilms, null, 2)}</pre> */}
      <br />
      {myFilmsPack.map(function (item) {
        return (
          <div>
            <h1>{item.name_russian}</h1>
            <img src={item.big_poster} alt="" />
            <p>
              Страна: {item.country_ru}
              <br />
              Описание: {item.description}
              <br />
              Слоган: {item.slogan}
              <br />
              Год: {item.year}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default MyFilms; // экспортируем компонент
