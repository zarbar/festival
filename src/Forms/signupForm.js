import React, { useState } from 'react';
import './signupFormStyle.css' 
import GoogleLoginButton from '../Zara_Google_Login/GoogleLoginButton.js'

export default function SignUp() {
    let [name, setName] = useState('');
    function handleNameChange(e) {
        setName(<h3>Your festival {e.target.value} is just a few clicks away, let's get this party started!</h3>)
        localStorage.setItem('Festival Name', e.target.value);
    }
    return (
        <>
        
        {name}
        <form>
            <input type="text" placeholder="Festival name" required onChange={handleNameChange}></input>
            <input type="text" placeholder="Email" required></input>
            <input type="text" placeholder="Password" required></input>
            <input type="text" placeholder="Confirm Password" required></input>
        </form>
        <div className="container">
        
        <button className="item">Create Account</button>
        <GoogleLoginButton text="Sign Up with Google"/>
        <a href="/login"><button className="item">Already have an account?</button></a>
 
        </div>
        </>
    )
}