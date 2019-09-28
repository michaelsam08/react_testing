import React from "react";
import "./header.scss";
import picasso from "../../assets/picasso.jpg";

const Header = props => {
  return (
    <header data-test="headerComponent">
      <div data-test="wrap">
        <div data-test="logo">
          <img data-test="picassoIMG" src={picasso} alt="picasso pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
