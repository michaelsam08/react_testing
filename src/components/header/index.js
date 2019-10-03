import React from "react";
import "./header.scss";
import picasso from "../../assets/picasso.jpg";

const Header = props => {
  return (
    <header className="header" data-test="headerComponent">
      <div className="wrap" data-test="wrap">
        <div className="logo" data-test="logo">
          <img
            className="picassoIMG"
            data-test="picassoIMG"
            src={picasso}
            alt="picasso pic"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
