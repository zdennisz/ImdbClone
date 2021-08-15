import "./App.css";
import React, { useEffect, useState } from "react";
import SearchBar from "./component/SearchBar/SearchBar";
import SignIn from "./component/SignIn/SignIn";
import Logo from "./component/Logo/Logo";
import LogIn from "./component/LogIn/LogIn";
export default function App() {
  const [isMainPage, SetisMainPage] = useState(true);
  const [userName, SetUserName] = useState();

  const signInHandler = () => {

    return userName ? SetisMainPage(true) : SetisMainPage(false)

  };
  const returnToMainHandler = () => {
    SetisMainPage(true)
  }

  return (
    <div className="App">
      <div className="header_cont">
        <Logo title="IMDb" handler={returnToMainHandler} />
        <SearchBar />
        <div className="vertical_line"></div>
        <SignIn signInHandler={signInHandler} userName={userName ? userName.firstName : ""} />
      </div>
      {isMainPage ? (
        <div className="born_today_container">
          <div className="born_today_title"></div>
          <div className="born_today_sub_title"></div>

          <div className="born_today_list">
            <div className="list_of_ppl"></div>
          </div>
        </div>
      ) : (
        <LogIn SetisMainPage={SetisMainPage} SetUserName={SetUserName} />
      )}
    </div>
  );
}
