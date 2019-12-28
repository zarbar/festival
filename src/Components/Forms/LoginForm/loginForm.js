import React from 'react';
import './loginFormStyle.css';
import GoogleLoginButton from '../../GoogleLogin/GoogleLoginButton';
import { Form, Button } from 'react-bootstrap';

export default function LoginForm() {

    function userNameChange(e) {
        localStorage.setItem('userName', e.target.value)
    }
    function userPassword(e) {
        localStorage.setItem('userPassword', e.target.value)
    }

    return (
        <main id='loginPage'>
            <GoogleLoginButton text="Log In with Google" />
            <p id="or"><span>or</span></p>
            <p>Log in with your user name:</p>

            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Your name" onChange={userNameChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" placeholder="Your password" onChange={userPassword} />
                </Form.Group>
            </Form>

            <div className='loginButtonContainer'>
                <a href='/dashboard/testUser'>
                    <Button>
                        Login
                    </Button>
                </a>
                <em id='dontHaveYet'>Don't have an account yet?</em>
                <a href="/signup">
                    <Button variant="warning">
                        Create New Account
                    </Button>
                </a>
            </div>
        </main>
    )
}