import React from "react";

import CardFilm from "./CardFilm";

const testArr = [
  {
    filmId: 1032606,
    nameRu: "Тьма",
    nameEn: "Dark",
    type: "TV_SERIES",
    year: "2017",
    description:
      "История четырёх семей, живущих спокойной и размеренной жизнью в маленьком немецком городке. Видимая идиллия рушится, когда бесследно исчезают двое детей и воскресают тёмные тайны прошлого.",
    filmLength: "01:00",
    countries: [
      {
        country: "Германия",
      },
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
      {
        genre: "фантастика",
      },
    ],
    rating: "8.1",
    ratingVoteCount: 98185,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/1032606.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1032606.jpg",
  },
  {
    filmId: 568267, //
    nameRu: "Прежде чем я усну", //
    nameEn: "Before I Go to Sleep", //
    type: "FILM", //
    year: "2013", //
    //
    description:
      "История о женщине, потерявшей память: каждое утро последние двадцать лет просто исчезают из ее воспоминаний, и каждое утро ей приходится по крупицам восстанавливать собственную жизнь.",
    filmLength: "01:32",
    countries: [
      {
        country: "Великобритания",
      },
      {
        country: "США",
      },
      {
        country: "Франция",
      },
      {
        country: "Швеция",
      },
    ], //
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "драма",
      },
      {
        genre: "триллер",
      },
    ], //
    rating: "6.6", //
    ratingVoteCount: 57540,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/568267.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/568267.jpg",
  },
  {
    filmId: 970032,
    nameRu: "Радиоволна",
    nameEn: "Frequency",
    type: "TV_SERIES",
    year: "2016",
    description:
      "В основе сюжета сериала лежит история детектива полиции, которой с помощью радиоволн удалось установить связь с давно ушедшим отцом. Он был, как и дочь, полицейским, и погиб в 1996 году. Вместе они образуют странный тандем и занимаются расследованием нераскрытых убийств. Однако такая вневременная помощь и советы от потустороннего партнера приводят к усложнению привычной жизни детектива, внося в нее элементы беспорядка и путаницы.",
    filmLength: "00:42",
    countries: [
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "драма",
      },
      {
        genre: "триллер",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "фэнтези",
      },
    ],
    rating: "7.5",
    ratingVoteCount: 10428,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/970032.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/970032.jpg",
  },
  {
    filmId: 1108556,
    nameRu: "Просто помиловать",
    nameEn: "Just Mercy",
    type: "FILM",
    year: "2019",
    description:
      "Чернокожий юрист Брайан Стивенсон посвятил себя борьбе за равные права и возможности в суде для самых уязвимых слоёв населения — в том числе неимущих, которые не в состоянии позволить себе квалифицированного и заинтересованного в успешном исходе дела адвоката.",
    filmLength: "02:17",
    countries: [
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    rating: "7.5",
    ratingVoteCount: 23290,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/1108556.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1108556.jpg",
  },
  {
    filmId: 1199100,
    nameRu: "Главный герой",
    nameEn: "Free Guy",
    type: "FILM",
    year: "2021",
    description:
      "Парень по имени Парень счастлив. Он живет в лучшем в мире городе Городе, работает на лучшей в мире работе в Банке и дружит с охранником по имени Приятель. И его совершенно не волнует, что банк грабят по нескольку раз на дню, а улицы города напоминают зону военных действий. Единственное, чего Парню не хватает для полного счастья — идеальной девушки, к которой у него имеется точный список требований. И вот однажды он видит на улице красотку, точь-в-точь как в его мечтах. Эта встреча изменит не только нашего главного героя, но и перевернет весь известный ему мир.",
    filmLength: "01:55",
    countries: [
      {
        country: "Канада",
      },
      {
        country: "США",
      },
      {
        country: "Япония",
      },
    ],
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "приключения",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "фэнтези",
      },
    ],
    rating: "7.2",
    ratingVoteCount: 127853,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/1199100.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1199100.jpg",
  },
];

const MyFilms = () => {
  return (
    <div className="MyFilms">
      {testArr.map((arrItem, index) => {
        return <CardFilm filmInfo={arrItem} key={index.toString()} />;
      })}
    </div>
  );
};

export default MyFilms;
