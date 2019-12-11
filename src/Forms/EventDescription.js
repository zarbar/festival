import React, { useState } from 'react';
import './eventdes.css'

export default function EventDescription() {
    let [submit, setSubmit] = useState('')
    function handleSubmit() {
        setSubmit('Splendid, thank you!')
    }
    return( 
        <>
        <h1>Tell us some more about your event!</h1>
        <form>
        <label>Event Details: (Don't worry, you can come back to this later!)</label>
        <textarea placeholder="Enter the details of your event here. Explain what people can expect,
        and why they should be there"></textarea>
        <label>Start Date:</label><input type="date"/>
        <label>End Date:</label><input type="date"/>
        <label>Location: </label><input type="string" placeholder="Sofia, Bulgaria"/>
        <label>Enter a short blurb about your festival: </label>
        <textarea placeholder="Hogsozzle is a perfoming arts and music festival known for its hog rost"></textarea>
        </form>
        <a href="/contactdetails"><button className="item" onClick={handleSubmit}>Continue</button></a><br></br>
        {submit}

        </>
    )
}