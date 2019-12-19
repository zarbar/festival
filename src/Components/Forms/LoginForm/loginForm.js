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
                <input className='email-input' type="password" placeholder="password"></input>
            </form>
            <div className="container">
                <a href='/dashboard/testUser'><button className="item">Login</button></a>
                <em>Don't have an account yet?</em>
                <a href="/signup"><button id="item-anchor" className="item">Create New Account</button></a>
            </div>
        </main>
    )
}