import React from 'react'
import './Location.css'
import mapicon from './mapicon.png';


export default class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            access: localStorage.getItem("Access"),
            address1: localStorage.getItem("Address Line 1"),
            address2: localStorage.getItem("Address Line 2"),
            address3: localStorage.getItem("Address Line 3"),
        }
    }

    render() {
        return (
            <div id='guest-info'
                className='previewSiteSectionBoxBasicInfo'>
                <img src={mapicon} alt='ticket' className='previewSiteIcon' />
                <h1>Location</h1>
                <p>{this.state.address1}<br />
                    {this.state.address2}<br />
                    {this.state.address3}
                </p>
                <h2>Getting there</h2>
                <p>{this.state.access}</p>
            </div>
        );
    }
}