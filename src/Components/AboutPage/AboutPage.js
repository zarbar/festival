import React from 'react';
import './AboutPage.css';
import CreatedBy from '../CreatedBy/CreatedBy';
import Footer from '../Footer/Footer';

class AboutPage extends React.Component {

    render() {
        return (
            <>
                <div className='about'>
                    <h1>About FestiPal</h1>
                    <p>
                        FestiPal is a tool for event organisers to create web-apps for festivals. Simply add your event information and FestiPal will build a stylish, reliable site that can be easily updated. Being fully responsive, your event site will look great across all devices.
                    </p>
                    <p>
                        FestiPal is free and easy to use giving you the power to update content as often and as quickly as needed. You now have one less job in organising your festival.
            </p>
                </div>
                <CreatedBy />
                <Footer />
            </>
        )
    }
}
export default AboutPage; 