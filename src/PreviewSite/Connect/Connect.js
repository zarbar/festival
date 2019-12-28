import React from 'react';
import './Connect.css';
import mobile from './mobile.png';
import emailIcon from './email.png';
import connectIcon from './connect.png';

export default class Connect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            socialMediaLink1: localStorage.getItem("Social Media 1"),
            contactEmail: localStorage.getItem("Email"),
            companyAddress: localStorage.getItem("Address")
        }
    }

    render() {
        return (
            <div className='previewSiteSectionBoxBasicInfo' id='connectSectionPreview'>
                <img src={mobile} alt='faq' className='previewSiteIcon' />
                <h2>Connect with us</h2>

                <a href={this.state.socialMediaLink1}>
                    <img className='socialIcon' src={connectIcon} alt='email us' /></a>

                <a className='festivalEmail' href={`mailto:${this.state.contactEmail}`}>
                    <img className='socialIcon' src={emailIcon} alt='email us' />
                </a>

                <p>Company registered to:  {this.state.companyAddress}</p>
            </div>
        );
    }
}