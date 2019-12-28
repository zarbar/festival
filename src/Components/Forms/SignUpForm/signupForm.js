import React, { useState } from 'react';
import GoogleLoginButton from '../../GoogleLogin/GoogleLoginButton';
import './signupFormStyle.css';
import { Form, Button } from 'react-bootstrap';

export default function SignUp() {
    let [festivalName, setFestivalName] = useState('');

    function handleNameChange(e) {
        setFestivalName(<h3>The website for {e.target.value} is just a few clicks away, let's get this party started!</h3>);
        localStorage.setItem("Event Name", e.target.value)
    }

    function userNameChange(e) {
        localStorage.setItem('userName', e.target.value)
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
                <p id="or">or</p>
                <p>sign up with your email address:</p>

                <Form id='loginForm'>
                    <Form.Group>
                        <Form.Control type="text" placeholder="User name" required onChange={userNameChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="text" placeholder="Festival name" required onChange={handleNameChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="email" placeholder="Email" required onChange={userEmailChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="password" placeholder="Password" required onChange={userPassword} />
                    </Form.Group>
                </Form>

                <div className='loginButtonContainer'>
                    <a href='/dashboard/testuser' className='logButton'>
                        <Button>
                            Create Account
                    </Button>
                    </a>
                    <a className='account-anchor logButton' href="/login">
                        <Button variant="warning">
                            Already have an account?
                </Button>
                    </a>
                </div>

            </main>
        </>
    )
}