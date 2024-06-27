import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from "../Features/TokenSlice";

function LoginForm({setShowLogin})
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    async function onLogin(e)
    {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }
        
        dispatch(userLogin(data));
    }
    
    return(
        <div className="col-md-4 p-4 border bg-dark">
            <h1>Login</h1>
            <hr/>
            <Form onSubmit={(e) => onLogin(e)}>
                <div className="mb-3">
                    <label htmlFor="login-email" className="form-label">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="login-email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="login-password" className="form-label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="login-password" />
                </div>
                <Button type="submit" variant="outline-light">Login</Button>
            </Form>

            <p role="button" className="mt-4" onClick={(e) => setShowLogin(false)}>Create new account</p>
        </div>
    );
}

export default LoginForm;