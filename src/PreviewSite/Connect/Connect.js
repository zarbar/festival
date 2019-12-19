import React from 'react';
import './Connect.css';
import partyGirl from '../../images/faqImages/faq1.jpg';


export default class Connect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            socialMediaLink1: localStorage.getItem("Social Media 1"),
            socialMediaLink2: localStorage.getItem("Social Media 2"),
            socialMediaLink3: localStorage.getItem("Social Media 3"),
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
                {/* <p>{this.state.socialMediaLink1}</p> */}
                Get in touch at:
        <a className='festivalEmail' href={`mailto:${this.state.contactEmail}`}>{this.state.contactEmail}</a>
                <p>Company registered to:  {this.state.companyAddress}</p>

                <img className='faq-img' src={partyGirl} alt='faq logo' />


            </>
        );
    }
}