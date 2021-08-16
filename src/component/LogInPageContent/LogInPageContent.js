import React from 'react'
import "./LogInPageContent.css"
import CustomButton from "../CustomButton/CustomButton";
const LogInPageContent = (props) => {
    const faceSignInHandler = () => {
        props.facebookSignInHandler()
    }

    const gSignInHandler = () => {
        props.googleSignInHandler()
    }

    const imdbSingInHandler = () => {
        props.SetPageContent(SignInState.SIGNIN)
    }

    const createAccountHandler = () => {
        props.SetPageContent(SignInState.CREATEACCOUNT)
    }
    return (
        <>
            <div className="left_col">
                <label className="sign_in_text">Sign in</label>
                <CustomButton btnTitle="Sign in with IMDb" iconSource="fab fa-imdb fa-2x imdb_logo_color" handler={imdbSingInHandler} />
                <CustomButton btnTitle="Sign in with Facebook" iconSource="fab fa-facebook fa-2x face_logo_color" handler={faceSignInHandler} />
                <CustomButton btnTitle="Sign in with Google" iconSource="fab fa-google fa-2x" handler={gSignInHandler} />
                <div className="or_segment">
                    <hr></hr><label className="or_text">or</label><hr></hr>

                </div>
                <CustomButton btnTitle="Create a New Account" btnStyle="create_account_btn" handler={createAccountHandler} />
            </div>
            <div className="mid_col">
                <div className="vl" />
            </div>
            <div className="right_col">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra dictum ex, sed laoreet nibh ornare mattis. Suspendisse ac massa at ligula mattis ornare. Sed iaculis a quam non maximus. Fusce varius suscipit sagittis. Maecenas hendrerit ipsum vel risus dapibus lobortis. Donec scelerisque felis quis neque convallis consequat in nec augue. In eu lorem dolor. Nullam sagittis velit vitae elementum congue. Quisque sed nulla vel orci sollicitudin varius. Praesent in faucibus mi. Aenean quis libero ac dui tincidunt dignissim quis vitae mi. Nulla felis arcu, luctus rutrum feugiat eget, condimentum suscipit neque. Suspendisse malesuada ac nunc non laoreet. Ut sed mi velit. Pellentesque pretium dictum eros ac aliquam.
                </p>
            </div>
        </>
    )
}

export default LogInPageContent