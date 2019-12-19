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
            endDate: localStorage.getItem("End date")

        }
    }
    render() {
        return (
            <>
                <h1>{this.state.festivalName}</h1>
                <p className='previewsiteblurb'>{this.state.blurb}</p>
                <p className='previewsiteblurb'>{this.state.location}</p>
                <p className='previewsiteblurb'>{this.state.startDate} - {this.state.endDate}</p>
            </>
        )
    };
}