import React from 'react';
import './Tickets.css';
import ticketPic from './ticketicon.png';

export default class Tickets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketDes: localStorage.getItem("Ticket Description"),
            ticketLink: "https://" + localStorage.getItem("Ticket Link"),
        }
    }

    render() {
        return (
            <div className='previewSiteSectionBoxBasicInfo' id='buy-tickets'>
                <img src={ticketPic} alt='ticket' className='previewSiteIcon' />
                <h1>Ticket Info</h1>
                <p>{this.state.ticketDes}</p>
                <button className='btn'>
                    <a href={this.state.ticketLink}>Buy Tickets</a>
                </button>

            </div>
        );
    }
}
