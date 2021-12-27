import React from "react";

import MyFilms from "./MyFilms";

const MainContent = ({ callbackClickPopup }) => {
  return (
    <div className="MainContent">
      <h1>
        ELMIR.WEB, 24 YEARS OLD
        <br />
        JUNIOR FRONTEND-DEVELOPER
      </h1>
      <h3>
        Сайт в разработке, любимые фильмы ниже.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Связь через{" "}
        <a
          href="https://vk.com/elmir_web"
          target="_blank"
          className="site-ahref"
        >
          ВКонтакте
        </a>
        .
      </h3>
      <br />
      <MyFilms callbackClickPopup={callbackClickPopup} />
    </div>
  );
};

export default MainContent;
