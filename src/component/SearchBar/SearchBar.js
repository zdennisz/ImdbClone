import "./SearchBar.css";
import React, { useState } from "react";
import SearchAccess from "../SearchAccess/SearchAcess";
const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const [btnStyle, setBtnStyle] = useState("btn btn_submit");
  const [serachCriteria, setSearchCriteria] = useState("actors");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

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
    const getData = async () => {
      try {
        const res = await SearchAccess(input.toString(), "auto-complete");
        setBtnStyle("btn btn_submit");
        props.setData(res.d);
        props.setUpdate(true);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  };
  return (
    <div className="search_container">
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
          placeholder="Search by anythng you want"
        ></input>
      </div>

      <button className={btnStyle} onClick={btnClickHandler}>
        <i className="fas fa-search fa-2x"></i>
      </button>
    </div>
  );
};

export default SearchBar;
