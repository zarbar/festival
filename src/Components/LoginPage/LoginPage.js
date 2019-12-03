import React from 'react';
import './LoginPage.css';
import GoogleLoginButton from '../../Zara_Google_Login/GoogleLoginButton';

class LoginPage extends React.Component {

    render() {
        return (
            <>
                <br />
                <GoogleLoginButton />
                <br />
            </>
        )
    }
}
export default LoginPage; 