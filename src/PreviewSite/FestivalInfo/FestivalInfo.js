import React from 'react'
import './FestivalInfo.css'

export default class FestivalInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            festivalName: 'Hogsozzle Festival',
            blurb: 'Performing arts and music festival',
            location: 'Sofia, Bulgaria',
            eventDescription: '',
            startDate: '04 Jun 2021',
            endDate: '07 Jun 2021'

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