import React from 'react';
import './PreviewSite.css'
import FestivalInfo from './FestivalInfo/FestivalInfo';
import Faq from './FAQ/FAQ';
import Tickets from './Tickets/Tickets';
import Location from './Location/Location';
import Connect from './Connect/Connect';


export default class PreviewSite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div className='hogsozzle'>
                    <FestivalInfo />
                    <Tickets />
                    <Location />
                    <Faq />
                    <Connect />
                </div>
            </>
        );
    }
}
