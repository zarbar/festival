import React from 'react'
import './FestivalInfo.css'

export default class FestivalInfo extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {}
    }
    render () {
        return (
        <>
         <h1>Hogsozzle Festival</h1>
            <div>
                <p>Performing arts and music festival<br/> Bulgaria <br/>
                June 4-7 2020
                </p>
            </div>
        </>
        )};
}