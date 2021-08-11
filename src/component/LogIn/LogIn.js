import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./LogIn.css";

const LogIn = (props) => {
  const { SetIsLoggedIn } = props


  const mockSignInHandler = () => {
    props.SetIsLoggedIn(true)
  }

  return (
    <div className="login_container">
      <div className="left_col">
        <label className="sign_in_text">Sign in</label>
        <CustomButton btnTitle="Sign in with IMDb" iconSource="fab fa-imdb fa-2x" handler={mockSignInHandler} />
        <CustomButton btnTitle="Sign in with Amazon" iconSource="fab fa-amazon fa-2x" handler={mockSignInHandler} />
        <CustomButton btnTitle="Sign in with Facebook" iconSource="fab fa-facebook fa-2x" handler={mockSignInHandler} />
        <CustomButton btnTitle="Sign in with Google" iconSource="fab fa-google fa-2x" handler={mockSignInHandler} />
        <CustomButton btnTitle="Sign in with Apple" iconSource="fab fa-apple fa-2x" handler={mockSignInHandler} />
        <div className="or_segment">
          <hr></hr><label className="or_text">or</label><hr></hr>

        </div>
        <CustomButton btnTitle="Create a New Account" btnStyle="create_account_btn" handler={mockSignInHandler} />
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
