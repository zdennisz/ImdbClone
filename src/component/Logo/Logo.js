import React, { memo } from "react";

import "./Logo.css";

const Logo = (props) => {
  return <div className="title_text">{props.title}</div>;
};

export default memo(Logo);
