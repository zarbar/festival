import React from 'react'
import './Location.css'

export default class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            access: localStorage.getItem("access"),
            postcode: localStorage.getItem("postcode")
        }
    }

    render() {
        return (
            <div className='guest-info'>
                <h1>Information</h1>
                <h2>Getting here</h2>
                <p>{this.state.access}</p>
                <p>For satnavs: {this.state.postcode}</p>
            </div>
        );
    }
}