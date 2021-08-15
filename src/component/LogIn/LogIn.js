import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import firebase from "../Firebase/Firebase"
import MediaButtonsData from "../../constants/MediaBarButtons"
import "./LogIn.css";

const LogIn = (props) => {


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
      console.log(user)
      props.SetUserName(user)
      props.SetisMainPage(true)

    }).catch((error) => {
      console.log(error)
    })

  }

  const facebookSignInHandler = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="login_content_container">
      <div className="login_container">
        <div className="left_col">
          <label className="sign_in_text">Sign in</label>
          <CustomButton btnTitle="Sign in with IMDb" iconSource="fab fa-imdb fa-2x imdb_logo_color" handler={mockSignInHandler} />
          <CustomButton btnTitle="Sign in with Amazon" iconSource="fab fa-amazon fa-2x amazon_logo_color" handler={mockSignInHandler} />
          <CustomButton btnTitle="Sign in with Facebook" iconSource="fab fa-facebook fa-2x face_logo_color" handler={facebookSignInHandler} />
          <CustomButton btnTitle="Sign in with Google" iconSource="fab fa-google fa-2x" handler={googleSignInHandler} />
          <CustomButton btnTitle="Sign in with Apple" iconSource="fab fa-apple fa-2x" handler={mockSignInHandler} />
          <div className="or_segment">
            <hr></hr><label className="or_text">or</label><hr></hr>

          </div>
          <CustomButton btnTitle="Create a New Account" btnStyle="create_account_btn" handler={mockSignInHandler} />
        </div>
        <div className="mid_col">
          <div className="vl" />
        </div>
        <div className="right_col">

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra dictum ex, sed laoreet nibh ornare mattis. Suspendisse ac massa at ligula mattis ornare. Sed iaculis a quam non maximus. Fusce varius suscipit sagittis. Maecenas hendrerit ipsum vel risus dapibus lobortis. Donec scelerisque felis quis neque convallis consequat in nec augue. In eu lorem dolor. Nullam sagittis velit vitae elementum congue. Quisque sed nulla vel orci sollicitudin varius. Praesent in faucibus mi. Aenean quis libero ac dui tincidunt dignissim quis vitae mi. Nulla felis arcu, luctus rutrum feugiat eget, condimentum suscipit neque. Suspendisse malesuada ac nunc non laoreet. Ut sed mi velit. Pellentesque pretium dictum eros ac aliquam.
          </p>
        </div>
      </div>
      <div className="login_footer">
        <SocialMediaBar data={MediaButtonsData} />
      </div>
    </div>
  );
};

export default LogIn;
