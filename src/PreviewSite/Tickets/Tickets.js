import React from 'react'
import './Tickets.css'


export default class Tickets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

render() {
    return (
        <div className='buy-tickets'>
            <p> Super early bird passes on sale now.<br />
                Get your ticket to Bulgaria’s hottest<br />
                summer party.</p>
            <button className='button'>Buy Tickets</button>
        </div>
    );
}
}
