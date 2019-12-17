import React, { useState } from 'react';
import './eventdes.css'

export default function EventDescription() {
    let [submit, setSubmit] = useState('')
    function handleSubmit() {
        setSubmit('Splendid, thank you!')
    }
    function handleEventDetails(e) {
        localStorage.setItem("Event Details", e.target.value)
    }
    function handleStartDate(e) {
        localStorage.setItem("Start Date", e.target.value)
    }
    function handleEndDate(e) {
        localStorage.setItem("End date", e.target.value)
    }
    function handleLocation(e) {
        localStorage.setItem("Location", e.target.value)
    }
    function handleBlurb(e) {
        localStorage.setItem("Blurb", e.target.value)
    }
    console.log(localStorage)
    return( 
        <>
        <h1>Tell us some more about your event!</h1>
        <form>
        <label>Event Details: (Don't worry, you can come back to this later!)</label>
        <textarea placeholder="Enter the details of your event here. Explain what people can expect,
        and why they should be there" onChange={handleEventDetails}></textarea>
        <label>Start Date:</label><input type="date" onChange={handleStartDate}/>
        <label>End Date:</label><input type="date" onChange={handleEndDate}/>
        <label>Location: </label><input type="string" placeholder="Sofia, Bulgaria" onChange={handleLocation}/>
        <label>Enter a short blurb about your festival: </label>
        <textarea placeholder="Hogsozzle is a perfoming arts and music festival known for its hog rost" onChange={handleBlurb}></textarea>
        </form>
        <a href="/contactdetails"><button className="item" onClick={handleSubmit}>Continue</button></a><br></br>
        {submit}

        </>
    )
}