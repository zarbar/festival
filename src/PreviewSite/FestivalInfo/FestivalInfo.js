import React from 'react'
import './FestivalInfo.css';
import info from './iconinfo.png';

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
                <h1 id='mainPreviewTitle'>{this.state.festivalName}</h1>
                <div className='previewSiteSectionBoxBasicInfo'>
                    <img className='previewSiteIcon' src={info} alt='infoIcon' />
                    <h1>Details</h1>
                    <p className='previewsiteblurb'>{this.state.location}</p>
                    <p className='previewsiteblurb'>{this.state.blurb}</p>

                    <p className='previewsiteblurb'>{this.state.startDate} - {this.state.endDate}</p>
                </div>
            </>
        )
    };
}