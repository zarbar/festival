import React from 'react';
import './loginFormStyle.css';
import GoogleLoginButton from '../../GoogleLogin/GoogleLoginButton';

export default function LoginForm() {


    function userNameChange(e) {
        localStorage.setItem('userName', e.target.value)
    }
    function userPassword(e) {
        localStorage.setItem('userPassword', e.target.value)
    }


    return (
        <main id='loginFormMain'>
            <GoogleLoginButton text="Log In with Google" />
            <p id="or"><span>or</span></p>
            <p>Log in with your user name:</p>
            <form>
                <input className='email-input' type="text" placeholder="Your name" onChange={userNameChange}></input>
                <input className='email-input' type="password" placeholder="Your password" onChange={userPassword}></input>
            </form>
            <div className="container">
                <a href='/dashboard/testUser'><button className="item">Login</button></a>
                <em>Don't have an account yet?</em>
                <a href="/signup"><button id="item-anchor" className="item">Create New Account</button></a>
            </div>
        </main>
    )
}