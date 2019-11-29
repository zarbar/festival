import React from 'react';
import './AboutPage.css';
import CreatedBy from '../CreatedBy/CreatedBy';

class AboutPage extends React.Component {

    render() {
        return (
            <>
                <div className='about'>
                    <h1>About FestiPal</h1>
                    <br />
                    <p>
                        FestiPal is a tool for event organisers to create web-apps for festivals.
              <br /><br />Simply select a design template, add your event information and build a stylish, reliable site that can be easily updated.
              <br /><br />FestiPal sites are responsive for mobile and desktop, meaning that your event site will look great across all devices.
              <br /><br />Why FestiPal?
              <br /><br />FestiPal is free and easy to use.It can be updated quickly..blabla. You can connect your FestiPal site to your social media accounts... talk about features
            </p>
                </div>
                <CreatedBy />
            </>
        )
    }
}
export default AboutPage; 