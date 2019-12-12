import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

export default function GoogleLoginButton() {

    const googleOAuth = () => {
        axios('/auth/google');
    }
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (<>
        {/* <button onClick={() => googleOAuth()}>
            Sign-in with Google
        </button> */}
        <GoogleLogin
            clientId="938737799020-b5taf86p2fcjq00f17je4i80sl0qr75c.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={googleOAuth}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    </>)
};
