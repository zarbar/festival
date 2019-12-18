import React from 'react';
import { Redirect } from "react-router-dom";
import GoogleLogin from 'react-google-login';
const axios = require('axios').default;


export default function GoogleLoginButton(props) {
    const [googleID, setGoogleID] = React.useState(0);
    const [redirect, setRedirect] = React.useState(false);


    const responseGoogle = (response) => {
        let user = {
            googleId: response.w3.Eea,
            username: response.w3.ig
        };
        axios.post('/checkuser', user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        setGoogleID(response.w3.Eea);
        setRedirect(true)
    }

    return (
        <>
            <GoogleLogin
                clientId="938737799020-75i5e0rtpiljimr4lqlmq4uticm2c9bn.apps.googleusercontent.com"
                buttonText={props.text}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            {redirect && <Redirect to={`/dashboard/${googleID}`} />}
        </>
    )
}
