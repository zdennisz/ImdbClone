import "./App.css";
import React, { useEffect, useState } from "react";
import VideoList from "./component/VideoList/VideoList";
import SearchBar from "./component/SearchBar/SearchBar";
import SignIn from "./component/SignIn/Signin";
import Logo from "./component/Logo/Logo";
export default function App() {
  const [data, setData] = useState();
  let resultList;

  const renderDataList = (data) => {
    setData(data);
  };

  if (data) {
    resultList = <VideoList items={data} />;
  }
  useEffect(() => {
    //chek the date and send request
    const date = Date();
  }, []);

  return (
    <div className="App">
      <div className="header_cont">
        <Logo title="IMDb" />
        <SearchBar setData={renderDataList} />
        <div className="search_results_container">
          {data ? resultList : null}
        </div>
        <div className="vertical_line"></div>
        <SignIn />
      </div>
      <div className="born_today_container">
        <div className="born_today_title"></div>
        <div className="born_today_sub_title"></div>

        <div className="born_today_list">
          <div className="list_of_ppl"></div>
        </div>
      </div>
    </div>
  );
}
