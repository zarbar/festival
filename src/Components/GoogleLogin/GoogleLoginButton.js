import React from 'react';
import GoogleLogin from 'react-google-login';

export default function GoogleLoginButton(props) {

    const responseGoogle = (response) => {
        console.log(response);
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


//real one:
  //client ID = 938737799020-75i5e0rtpiljimr4lqlmq4uticm2c9bn.apps.googleusercontent.com
  //client secret = 
//   8q5xWtfYsuCjmpVBv58dQXat


//test site:
// clientId="938737799020-b5taf86p2fcjq00f17je4i80sl0qr75c.apps.googleusercontent.com"
