import React from 'react';
import './AboutPage.css';
import CreatedBy from '../CreatedBy/CreatedBy';

class AboutPage extends React.Component {

    render() {
        return (
            <>
                <div className='about'>
                    <h1>The What</h1>
                    <p>
                        FestiPal is a tool for event organisers to create web-apps for festivals. Simply select a design template, add your event information and build a stylish, reliable site that can be easily updated. FestiPal sites are responsive for mobile and desktop, meaning that your event site will look great across all devices.
                    </p>
                    <h1>The Why</h1>
                    <p>
                        FestiPal is free and easy to use giving you the power to update content as often and as quickly as needed. You now have one less job in organising your festival.
            </p>
                </div>
                <CreatedBy />
            </>
        )
    }
}
export default AboutPage; 