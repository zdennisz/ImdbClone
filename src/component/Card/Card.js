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
        <label className="content_title">{data.l}</label>

        <label className="content_sub_title">{data.y}</label>

        <label className="content_sub_title">{data.s}</label>
      </div>
    </div>
  );
};

export default Card;
