import React, { useState } from 'react';
import GoogleLoginButton from '../../GoogleLogin/GoogleLoginButton';

export default function SignUp() {
    let [name, setName] = useState('');
    function handleNameChange(e) {
        setName(<h3>Your festival {e.target.value} is just a few clicks away, let's get this party started!</h3>)
    }
    return (
        <>

            <main id='signUpPageContent'>
                {name}
                <br />
                {/* google login button at top */}
                <GoogleLoginButton text="Sign Up with Google" />
                <p id="or"><span>or</span></p>
                <p>sign up with your email address</p>

                <form id='loginForm'>
                    <input type="text" placeholder="Festival name" required onChange={handleNameChange} />

                    <input type="text" placeholder="Email" required />

                    <input type="text" placeholder="Password" required />

                    <input type="text" placeholder="Confirm Password" required />
                </form>


                <div className="container">

                    <button className="item">Create Account</button>

                    <a href="/login"><button className="item">Already have an account?</button></a>

                </div>
            </main>
        </>
    )
}