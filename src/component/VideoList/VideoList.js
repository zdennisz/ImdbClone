import React from "react";
import Card from "../Card/Card";
import "./VideoList.css";
const VideoItem = (props) => {
  const { data, index } = props;

  return (
    <li key={index.toString()}>
      <Card data={data} />
    </li>
  );
};

const VideoList = (props) => {
  const { items } = props;

  const itemList = items.map((item, index) => {
    return <VideoItem key={index} data={item} index={index} />;
  });

  return <ul className="video_list">{itemList}</ul>;
};

export default VideoList;
