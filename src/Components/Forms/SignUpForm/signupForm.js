import React, { useState } from 'react';
import GoogleLoginButton from '../../GoogleLogin/GoogleLoginButton';
import './signupFormStyle.css';

export default function SignUp() {
    let [festivalName, setFestivalName] = useState('');

    function handleNameChange(e) {
        setFestivalName(<h3>The website for {e.target.value} is just a few clicks away, let's get this party started!</h3>);
        localStorage.setItem("Event Name", e.target.value)
    }

    function userEmailChange(e) {
        localStorage.setItem('userEmail', e.target.value)
    }
    function userPassword(e) {
        localStorage.setItem('userPassword', e.target.value)
    }


    return (
        <>

            <main id='signUpPageContent'>
                {festivalName}
                <br />
                <GoogleLoginButton text="Sign Up with Google" />
                <p id="or"><span>or</span></p>
                <p>sign up with your email address</p>

                <form id='loginForm'>
                    <input type="text" placeholder="Festival name" required onChange={handleNameChange} />
                    <input type="text" placeholder="Email" required onChange={userEmailChange} />
                    <input type="password" placeholder="Password" required onChange={userPassword} />
                </form>

                <div className="container">
                    <a href='/dashboard/testuser'>
                        <button className="item">Create Account</button></a>
                    <a href="/login"><button className="item">Already have an account?</button></a>
                </div>
            </main>
        </>
    )
}