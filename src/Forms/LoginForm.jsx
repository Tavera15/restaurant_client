import React from "react";
import { Button, Form } from "react-bootstrap";


function LoginForm({setShowLogin})
{
    return(
        <div className="col-md-4 p-4 border bg-dark">
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

            <p role="button" className="mt-4" onClick={(e) => setShowLogin(false)}>Create new account</p>
        </div>
    );
}

export default LoginForm;