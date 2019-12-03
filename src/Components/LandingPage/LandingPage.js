import React from 'react';
import './LandingPage.css';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage.js';
import logo from '../../images/Logos/yellowEnglebert.png';
import logo1 from '../../images/Logos/purpleEnglebert.png';
import AboutPage from '../AboutPage/AboutPage';


class LandingPage extends React.Component {
    render() {
        return (
            <>
                <header className="app-header">
                    <span>Login</span>
                    <span><img src={logo} alt='logo' /></span>
                    <span>Menu</span>
                </header>

                <main className="wrapper">
                    <div className='join-now'>
                        <p>FestiPal is the essential digital tool for creating bespoke, user-friendly web-apps.
            <br />
                            Designed for festival organisers, from indie events to international parties.
            </p>
                        <br /><br />
                        <button className='join'>Join now</button>
                    </div>
                </main>

                < AboutPage />



                <footer>
                    <div className='logo1'>
                        <img src={logo1} alt='logo1' />
                    </div>
                    <div className='footer-nav'>
                        <p>Get started</p>
                        <p>About</p>
                        <p>Login</p>
                    </div>

                </footer>

                <div className='footer-end'>
                    <p>KODIRI 2019</p>
                </div>

                <LoginPage />
                <SignUpPage />
            </>
        )
    }
}
export default LandingPage; 