import React from "react";
import "./Card.css";
const Card = (props) => {
  const { data } = props;

  return (
    <div className="continer">
      <div className="img_container">
        <img
          className="img"
          src={data.i.imageUrl}
          width={data.i.width}
          height={data.i.height}
          alt={data.q}
        />
      </div>
      <div className="content">
        <label>Title</label>
        <label>{data.l}</label>
        <label>Starring</label>
        <label>{data.s}</label>
        <label>Year</label>
        <label>{data.y}</label>
      </div>
    </div>
  );
};

export default Card;
