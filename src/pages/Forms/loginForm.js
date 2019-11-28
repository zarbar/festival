import React from 'react';
import './loginFormStyle.css';

export default function Login() {
    return (
        <>
        <button>Login With Facebook</button>
        <form>
            <input type="text" placeholder="email"></input>
            <input type="text" placeholder="password"></input>
        </form>
        <div className="container">
        <button className="item">Login</button>
        <button className="item">Create Account</button>
        </div>
        </>
    )
}