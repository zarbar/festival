import React from 'react';
import './Tickets.css';
import festival from '../../images/ticket/festival1.jpg';
import concert from '../../images/ticket/concert.jpg';
import music from '../../images/ticket/music.jpg';

export default class Tickets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketDes: localStorage.getItem("Ticket Description"),
            ticketLink: "https://" + localStorage.getItem("Ticket Provider"),
            ticketProvider: localStorage.getItem("Ticket Provider"),
            imgSrc1: festival,
            imgSrc2: concert,
            imgSrc3: music
        }
    }

    render() {
        return (
            <div className='buy-tickets'>
                <img src={this.state.imgSrc1} alt='your' />
                <p>{this.state.ticketDes}</p>
                <p>Ticket provider: {this.state.ticketProvider}</p>
                <button className='btn'>
                    <a href={this.state.ticketLink}>Buy Tickets</a>
                </button>

            </div>
        );
    }
}
