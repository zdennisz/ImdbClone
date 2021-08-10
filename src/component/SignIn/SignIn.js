import React, { useEffect, useState } from "react";
import "./SignIn.css";
const SignIn = (props) => {
  const { userName } = props;

  const signInHandler = () => {
    props.signInHandler();
  };

  return (
    <button className="sign_in_btn" onClick={signInHandler}>
      {userName ? `Hello ${userName}` : "Sign in"}
    </button>
  );
};

export default SignIn;
