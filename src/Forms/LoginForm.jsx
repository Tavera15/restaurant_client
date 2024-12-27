import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { userLogin } from "../Features/TokenSlice";
import { useNavigate } from "react-router-dom";

function LoginForm()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function onLogin(e)
    {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }
        
        await dispatch(userLogin(data));
        navigate("/Account/Profile");
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
        </div>
    );
}

export default LoginForm;