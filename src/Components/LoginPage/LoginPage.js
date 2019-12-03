import React from 'react';
import './LoginPage.css';
import GoogleLoginButton from '../../Zara_Google_Login/GoogleLoginButton';

class LoginPage extends React.Component {

render() {
    return (
<>
<button className="fb">Login With Facebook</button>
      <GoogleLoginButton />
<p id="or"><span>or</span></p>
        <form>
            <input type="text" placeholder="email"></input>
            <input type="text" placeholder="password"></input>
        </form>
        <div className="container">
        <button className="item">Login</button>
        <button className="item">Create Account</button>
        </div>
</>
    )
  }
}
export default LoginPage; 