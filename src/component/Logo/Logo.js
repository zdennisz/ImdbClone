import React from "react";

import "./Logo.css";

const Logo = (props) => {
  const clickHandler = () => {
    props.handler()
  }
  return <div onClick={clickHandler} className="title_text">{props.title}</div>;
};

export default Logo;
