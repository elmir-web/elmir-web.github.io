import React from "react";

import photoElmir from "./photos/Elmir.png";

const ElmirAside = () => {
  return (
    <div className="ElmirAside">
      <div className="ElmirPhotoWrapper">
        <img src={photoElmir} className="ElmirPhoto" alt="" />
      </div>
    </div>
  );
};

export default ElmirAside;
