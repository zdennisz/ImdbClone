import "./App.css";
import React, { useState } from "react";
import VideoList from "./component/VideoList/VideoList";
import SearchBar from "./component/SearchBar/SearchBar";
import SignIn from "./component/SignIn/Signin";
export default function App() {
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState();
  let resultList;

  if (update) {
    resultList = <VideoList items={data} />;
  }
  return (
    <div className="App">
      <div className="header_cont">
        <div className="title_text">IMDb</div>
        <SearchBar setData={setData} setUpdate={setUpdate} />
        <div className="search_results_container">
          {update ? resultList : null}
        </div>
        <div className="vertical_line"></div>
        <SignIn />
      </div>
    </div>
  );
}
