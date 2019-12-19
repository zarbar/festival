import React from 'react'
import './Connect.css'


export default class Connect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            socialMediaLink1: 'Twitter',
            socialMediaLink2: 'Facebook',
            socialMediaLink3: 'Instagram',
            contactEmail: 'info@hogsozzle.com',
            companyAddres: 'your company address'
        }
    }

    render() {
        return (
            <>
                <div className='connect'>
                    <h2>Connect with us</h2>
                </div>
                <div className='connect-withus'>
                    <p>{this.state.socialMediaLink1}</p>
                    <p>{this.state.socialMediaLink2}</p>
                    <p>{this.state.socialMediaLink3}</p>
                    Email us:
                    <a className='festivalEmail' href={`mailto:${this.state.contactEmail}`}>{this.state.contactEmail}</a>
                    <p>{this.state.companyAddres}</p>
                </div>
            </>
        );
    }
}