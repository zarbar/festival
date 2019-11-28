import React from 'react';
import './eventdes.css'

export default function EventDescription() {
    return( 
        <>
        <form>
        <label>Event Details: (Don't worry, you can come back to this later!</label>
        <textarea placeholder="enter your details"></textarea>
        <label>Start Date:</label><input type="date"/>
        <label>Start Time:</label><input type="time"/>
        <label>End Date:</label><input type="date"/>
        <label>End Time:</label><input type="time"/>
        </form>
        <button className="item">Continue</button>
        </>
    )
}