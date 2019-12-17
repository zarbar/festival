import React from 'react';
import { Redirect } from "react-router-dom";
import GoogleLogin from 'react-google-login';
const axios = require('axios').default;


export default function GoogleLoginButton(props) {
    const [googleID, setGoogleID] = React.useState('');

    const responseGoogle = (response) => {
        setGoogleID(response.w3.Eea);
        console.log('googleID: ' + googleID);
        let user = {
            googleId: response.w3.Eea,
            username: response.w3.ig
        };
        console.log(user);
        axios.post('/checkuser', user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        console.log('googleID: ' + googleID);
        return <Redirect to={`/dashboard/wee`} />
        //add the redirect here from react-router-dom... like how you did on details page of kodflix - redirect if not found example
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
        </>
    )
}

