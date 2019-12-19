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
                <input className='email-input' type="text" placeholder="email"></input>
                <input className='email-input' type="text" placeholder="password"></input>
            </form>
            <div className="container">
                <button className="item">Login</button><br/>
                <em>Don't have an account yet?</em><br/>
                <a href="/signup"><button id="item-anchor">Create New Account</button></a>
            </div><br/>
        </main>
    )
}