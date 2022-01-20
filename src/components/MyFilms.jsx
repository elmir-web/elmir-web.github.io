import React, { useEffect } from "react";

import CardFilm from "./CardFilm";

import arrayJSONFilms from "./../DATAS/MyFilms.json";

const MyFilms = ({ callbackClickPopup }) => {
  useEffect(() => {
    console.log(arrayJSONFilms.length);
  }, []);

  return (
    <div className="MyFilms">
      {/* 1211 */}
      5544
      {/* {testArr.map((arrItem, index) => (
        <CardFilm
          filmInfo={arrItem}
          callbackClickPopup={callbackClickPopup}
          key={index.toString()}
        />
      ))} */}
      1122
      {/* 21 */}
    </div>
  );
};

export default MyFilms;
