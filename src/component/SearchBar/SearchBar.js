import "./SearchBar.css";
import React, { useState, useEffect } from "react";
import SearchAccess from "../SearchAccess/SearchAcess";
import VideoList from "../VideoList/VideoList";
import Loader from "../Loader/Loader"
const SearchBar = (props) => {
  let resultList;
  const [input, setInput] = useState("");
  const [btnStyle, setBtnStyle] = useState("btn btn_submit");
  const [serachCriteria, setSearchCriteria] = useState("actors");
  const [popUpState, SetPopUpState] = useState(false);
  const [data, setData] = useState();
  const [isLoading, SetIsLoading] = useState(false)

  let searchResultContainerStyle = "search_results_container "

  if (popUpState) {
    searchResultContainerStyle += "search_results_container_open"
  } else {
    searchResultContainerStyle += "search_results_container_closed"
  }

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  if (data) {
    resultList = <VideoList items={data} />;
  }
  const selectChangedhandler = (event) => {
    switch (event.target.value) {
      case "Titles":
        setSearchCriteria("title");
        break;
      case "TV Episodes":
        setSearchCriteria("tv");
        break;
      case "Celebs":
        setSearchCriteria("celebs");
        break;
      case "Companies":
        setSearchCriteria("companies");
        break;
      case "Keywords":
        setSearchCriteria("keywords");
        break;
      default:
        setSearchCriteria("auto-complete");
    }
  };

  const btnClickHandler = () => {
    setBtnStyle("btn btn_submit_click");
    SetIsLoading(true)
    const getData = async () => {
      try {
        const res = await SearchAccess(input.toString(), "auto-complete");
        setBtnStyle("btn btn_submit");
        setData(res.d);
        openSearchbar();
        SetIsLoading(false)
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  };

  const closeSearchBar = () => {
    SetPopUpState(false);
  };
  const openSearchbar = () => {
    SetPopUpState(true);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeSearchBar);
    return () => {
      document.body.removeEventListener("click", closeSearchBar);
    };
  }, []);
  return (
    <div className="search_container">
      <div className={searchResultContainerStyle}  >
        {isLoading ? <Loader /> : null}
        {popUpState ? resultList : null}
      </div>
      <div className="select_search">
        <select className="select" onChange={selectChangedhandler}>
          <option value="All">All</option>
          <option value="Titles">Titles</option>
          <option value="TV Episodes">TV Episodes</option>
          <option value="Celebs">Celebs</option>
          <option value="Companies">Companies</option>
          <option value="Keywords">Keywords</option>
        </select>
      </div>
      <div className="input_search">
        <input
          className="input_text"
          type="text"
          value={input}
          onChange={inputHandler}
          placeholder="Search by anything you want"
        ></input>
      </div>

      <button className={btnStyle} onClick={btnClickHandler}>
        <i className="fas fa-search fa-2x"></i>
      </button>
    </div>
  );
};

export default SearchBar;
