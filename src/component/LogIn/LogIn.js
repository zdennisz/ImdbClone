import React, { useState } from "react";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import firebase from "../Firebase/Firebase"
import MediaButtonsData from "../../constants/MediaBarButtons"
import "./LogIn.css";
import SignInState from "../../constants/SignInState";
import LogInPageContent from "../LogInPageContent/LogInPageContent";

const LogIn = (props) => {
  const [pageContent, SetPageContent] = useState(SignInState.LOGIN)
  let Content
  const mockSignInHandler = () => {
    props.SetisMainPage(true)
  }
  const googleSignInHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then((result) => {
      const userData = result.additionalUserInfo.profile
      const user = {
        email: userData.email,
        lastName: userData.family_name,
        firstName: userData.given_name,
        pic: userData.picture
      }

      props.SetUserName(user)
      props.SetisMainPage(true)

    }).catch((error) => {
      console.log(error)
    })

  }

  const facebookSignInHandler = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((res) => {
      const userData = res.additionalUserInfo.profile
      const user = {
        email: userData.email,
        lastName: userData.last_name,
        firstName: userData.first_name,
        pic: userData.picture.data.url
      }
      props.SetUserName(user)
      props.SetisMainPage(true)
    }).catch((err) => {
      console.log(err)
    })
  }


  switch (pageContent) {
    case SignInState.LOGIN:
      Content = <LogInPageContent facebookSignInHandler={facebookSignInHandler} googleSignInHandler={googleSignInHandler} SetPageContent={SetPageContent} />
      break;
    case SignInState.CREATEACCOUNT:
      Content = <div>Create Account</div>
      break;
    case SignInState.SIGNIN:
      Content = <div>Sign in with IMDb</div>
      break;

  }
  return (
    <div className="login_content_container">
      <div className="login_container">
        {Content}
      </div>
      <div className="login_footer">
        <SocialMediaBar data={MediaButtonsData} />
      </div>
    </div>
  );
};

export default LogIn;
