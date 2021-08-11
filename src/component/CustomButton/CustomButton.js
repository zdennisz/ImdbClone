import React from "react";
import "./CustomButton.css";

const CustomButton = (props) => {
  const { btnTitle, iconSource, btnStyle } = props

  const onClickHandler = () => {
    props.handler()
  }
  let btnBasicStyle = "btn_container "
  if (btnStyle) {
    btnBasicStyle += btnStyle
  }

  return <div className={btnBasicStyle} onClick={onClickHandler}>{iconSource ? <i className={iconSource} ></i> : ""}<span className="btn_title">{btnTitle}</span></div>;
};

export default CustomButton;
