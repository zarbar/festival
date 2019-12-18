import React, { useState } from 'react';
import './basicInfo.css'

export default function EventDescription() {    
      
    let [submit, setSubmit] = useState('')
    function handleSubmit() {
        setSubmit('Splendid, thank you!')
    }
    return( 
        <>
        <h1>Tell us some more about your event!</h1>
        <form id="eventDescriptionForm">
        <label>Festival name</label>
        <input type='text' placeholder="Enter the details of your event here. Explain what people can expect,
        and why they should be there"></input>
        <label>Start Date:</label><input type="date"/>
        <label>End Date:</label><input type="date"/>
        <label>Location: </label><input type="string" placeholder="Sofia, Bulgaria"/>
        <label>Enter a short blurb about your festival: </label>
        <textarea className="eventDescriptiontextarea" placeholder="Hogsozzle is a perfoming arts and music festival known for its hog rost"></textarea>
        <div className="containerBasicInfo">
                <button onClick={handleSubmit} className="item">Save</button>
                <button onClick={handleSubmit} className="item">Preview</button>
                <button onClick={handleSubmit} className="item">Next</button>
            </div>
            {submit}
        </form>
        {/* <a href="/contactdetails"><button className="item" onClick={handleSubmit}>Continue</button></a><br></br> */}
        
        
        </>
    )
}