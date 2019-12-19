import React from 'react';
import './Tickets.css';
import festival from '../../images/ticket/festival1.jpg';
import concert from '../../images/ticket/concert.jpg';
import music from '../../images/ticket/music.jpg';

export default class Tickets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketDes: 'Super early bird passes on sale now. Get your ticket to Bulgaria’s hottest summer party.',
            ticketLink: '/',
            imgSrc1: festival,
            imgSrc2: concert,
            imgSrc3: music
        }
    }

    render() {
        return (
            <div className='buy-tickets'>
                <p>{this.state.ticketDes}</p>
                <button className='btn'>
                    <a href={this.state.ticketLink}>Buy Tickets</a>
                </button>
                <img src={this.state.imgSrc1} alt='your' />
            </div>
        );
    }
}
