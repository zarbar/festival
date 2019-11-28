import React from 'react';
import './LandingPage.css';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage.js';

class LandingPage extends React.Component {

render() {
    return (
<>
This is the Landing Page Component
    <LoginPage />
    <SignUpPage />
</>
    )
}
}
export default LandingPage; 