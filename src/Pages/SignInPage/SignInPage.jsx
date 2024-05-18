import React from "react";
import { Button, Form } from "react-bootstrap";
import MainNavBar from "../../Components/MainNavBar";
import "./SignInPage.css"

function SignInPage()
{
    return(
        <>
            <MainNavBar />
            <div className="signin-bg d-flex">
                <div className="shader d-flex">

                    <div className="align-self-stretch flex-row-wrap container center-items justify-content-center">
                        <div className="flex-row-wrap container center-items justify-content-center p-4">
                            <div className="col-md-4 p-4 border align-self-stretch bg-dark">
                                <h1>Login</h1>
                                <hr/>
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="login-email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="login-email" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="login-password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="login-password" />
                                    </div>
                                    <Button typeof="submit" variant="outline-light">Login</Button>
                                </Form>
                            </div>

                            <h5 className="m-0 my-4 col-md-2 d-xs-none align-self-stretch p-0"> </h5>
                            <h5 className="border col-12 d-block d-sm-none m-0 my-4 p-0"></h5>

                            <div className="col-md-4 mt-md-0 p-4 border bg-dark">
                                <h1>Sign up</h1>
                                <hr/>
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="signup-email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="signup-email" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="signup-password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="signup-password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="signup-confirm-password" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="signup-confirm-password" />
                                    </div>
                                    <Button typeof="submit" variant="outline-light">Register</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInPage;