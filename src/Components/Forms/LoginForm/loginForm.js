import React from 'react';
import './loginFormStyle.css';
import GoogleLoginButton from '../../GoogleLogin/GoogleLoginButton';

export default function LoginForm() {
    return (
        <main id='loginFormMain'>
            <GoogleLoginButton text="Log In with Google" />
            <p id="or"><span>or</span></p>
            <p>Log in with your email address</p>
            <form>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="password"></input>
            </form>

            <div className="container">
                <button className="item">Login</button>
                <em>Don't have an account yet?</em>
                <a href="/signup"><button className="item">Create New Account</button></a>
            </div>
        </main>
    )
}