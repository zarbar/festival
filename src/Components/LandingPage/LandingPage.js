import React from 'react';
import './LandingPage.css';
import AboutPage from '../AboutPage/AboutPage';
import Footer from '../Footer/Footer';


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
                <Footer />
            </>
        )
    }
}
export default LandingPage;

