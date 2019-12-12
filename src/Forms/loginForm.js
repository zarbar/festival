import React from 'react';
import './loginFormStyle.css';
import GoogleLoginButton from '../Zara_Google_Login/GoogleLoginButton.js'

export default function Login() {
    return (
        <>
        <form>
            <input type="text" placeholder="email"></input>
            <input type="text" placeholder="password"></input>
        </form>
        <div className="container">
        <a href="/loggedInTrue"><button className="item">Login</button></a>
            <GoogleLoginButton text="Log In with Google"/>
        <em>Don't have an account yet?</em>
        <a href="/signup"><button className="item">Create New Account</button></a>
        

        </div>
        </>
    )
}