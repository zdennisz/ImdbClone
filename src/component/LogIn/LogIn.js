import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="login_container">
      <div className="left_col">
        <label>Sign in</label>
        <CustomButton />
        <CustomButton />
        <CustomButton />
        <CustomButton />
        <CustomButton />
        <hr></hr>
        <CustomButton />
      </div>
      <div className="right_col">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
          dolor, finibus ac imperdiet at, ullamcorper sed neque. Nam aliquam,
          velit eget hendrerit imperdiet, nibh orci ornare tortor, sodales
          rhoncus nisi elit sit amet eros. Sed lacinia nulla eleifend metus
          scelerisque, at sagittis eros tincidunt. Ut ante sapien, ornare vel
          arcu commodo
        </p>
      </div>
    </div>
  );
};

export default LogIn;
