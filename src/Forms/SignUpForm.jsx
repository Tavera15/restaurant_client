import React from "react";
import { Button, Form } from "react-bootstrap";


function SignUpForm({setShowLogin})
{
    return(
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

            <p role="button" className="mt-4 pointer" onClick={(e) => setShowLogin(true)}>Already have an account?</p>
        </div>
    );
}

export default SignUpForm;