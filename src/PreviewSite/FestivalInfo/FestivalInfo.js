import React from 'react'
import './FestivalInfo.css'

export default class FestivalInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            festivalName: localStorage.getItem("Event Name"),
            blurb: localStorage.getItem("Blurb"),
            location: localStorage.getItem("Location"),
            eventDescription: '',
            startDate: localStorage.getItem("Start Date"),
            endDate: localStorage.getItem("End Date")

        }
    }
    render() {
        return (
            <>
                <h1>{this.state.festivalName}</h1>
                <p>{this.state.blurb}</p>
                <p>{this.state.location}</p>
                <p>{this.state.startDate} - {this.state.endDate}</p>
            </>
        )
    };
}