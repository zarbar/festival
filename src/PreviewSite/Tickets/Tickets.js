import React from 'react';
import './Tickets.css';

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
            <div className='buy-tickets'>
                <p>{this.state.ticketDes}</p>
                <button className='btn'>
                    <a href={this.state.ticketLink}>Buy Tickets</a>
                </button>

            </div>
        );
    }
}
