import React from 'react'
import "./SignInDropDownMenu.css"
const SignInDropDownMenu = (props) => {
    const { userName } = props

    const signOutHandler = () => {
        props.signOut()
    }

    const goToProfileHandler = () => {
        props.goToProfile();
    }
    return (<>
        <div className="drop_down">
            <div className="drop_down_btn">
                {`Hello ${userName}`}
            </div>
            <div className="drop_down_container">
                <div className="drop_down_text" onClick={goToProfileHandler}>Profile</div>
                <div className="drop_down_text" onClick={signOutHandler}>Sign Out</div>
            </div>


        </div>
    </>)

}

export default SignInDropDownMenu