import React from 'react';
import GoogleLogin from 'react-google-login';



export default function GoogleLoginButton(props) {
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

const responseGoogle = (response) => {
    console.log(response);
}


  //client ID = 938737799020-75i5e0rtpiljimr4lqlmq4uticm2c9bn.apps.googleusercontent.com


  //client secret = 
//   8q5xWtfYsuCjmpVBv58dQXat