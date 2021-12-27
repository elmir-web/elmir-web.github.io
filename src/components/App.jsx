import React, { useState } from "react";

import ElmirAside from "./ElmirAside";
import MainContent from "./MainContent";
import FilmPopup from "./FilmPopup";

function App() {
  const [isPopupActiv, setPopupActiv] = useState(false);
  const [currentFilm, setCurrectFilm] = useState({});

  const callbackClickPopup = (filmInfo) => {
    setCurrectFilm(filmInfo);
    setPopupActiv(true);
  };

  let mainContentFull = (
    <div className="wrapper">
      <ElmirAside />
      <MainContent callbackClickPopup={callbackClickPopup} />
    </div>
  );

  let popupContent = (
    <div>
      <FilmPopup filmInfo={currentFilm} setPopupActiv={setPopupActiv} />
    </div>
  );

  return (
    <div className="App" style={{ color: "white" }}>
      {isPopupActiv === false ? mainContentFull : popupContent}
    </div>
  );
}

export default App;
