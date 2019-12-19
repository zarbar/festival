import React from 'react';
import './Connect.css';
import partyGirl from '../../images/faqImages/faq1.jpg';


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
            <>
                <div className='connect'>
                    <h2>Connect with us</h2>
                </div>
                <a href={this.state.socialMediaLink1}><p>{this.state.socialMediaLink1}</p></a>
                Get in touch at:
        <a className='festivalEmail' href={`mailto:${this.state.contactEmail}`}>{this.state.contactEmail}</a>

                <p>Company registered to:  {this.state.companyAddress}</p>

                <img className='faq-img' src={partyGirl} alt='faq logo' />


            </>
        );
    }
}