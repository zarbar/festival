import React from 'react';
import './LandingPage.css';
import logo1 from '../../images/Logos/purpleEnglebert.png';
import AboutPage from '../AboutPage/AboutPage';

class LandingPage extends React.Component {
    render() {
        return (
            <>
                <main className="wrapper">
                    <div className='join-now'>
                        FestiPal is the essential digital tool for creating bespoke, user-friendly web-apps.
                        <br /> <br />

                        Designed for festival organisers, from indie events to international parties.
                        <br /> <br />

                        <a href="/signup">
                            <button className='join'>
                                <h1>Join now</h1>
                            </button>
                        </a>
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
            </>
        )
    }
}
export default LandingPage; 