import React from 'react';
import './signupFormStyle.css'

export default function SignUp() {
    return (
        <>
        <button>Login With Facebook</button>
        <form>
            <input type="text" placeholder="Festival name" required></input>
            <input type="text" placeholder="Email" required></input>
            <input type="text" placeholder="Password" required></input>
            <input type="text" placeholder="Confirm assword" required></input>
        </form>
        <div className="container">
        <button className="item">Login</button>
        <button className="item">Create Account</button>
        <p>CAPCHA GOES HERE</p>
        </div>
        </>
    )
}