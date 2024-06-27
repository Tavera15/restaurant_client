import React, { useState } from "react";
import MainNavBar from "../../Components/MainNavBar";
import "./SignInPage.css"
import SignUpForm from "../../Forms/SignUpForm";
import LoginForm from "../../Forms/LoginForm";

function SignInPage()
{
    const [showLogin, setShowLogin] = useState(true);

    return(
        <div>
            <MainNavBar />
            <div className="signin-bg d-flex">
                <div className="shader d-flex">
                    <div className="flex-row-wrap container">
                        <div className="flex-row-wrap container center-items">
                            {
                                showLogin ? <LoginForm setShowLogin={setShowLogin}/> : <SignUpForm setShowLogin={setShowLogin} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;
