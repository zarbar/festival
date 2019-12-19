import React from 'react';
import {useParams} from 'react-router-dom';
import './basicInfo.css';
import axios from 'axios';

export default function EventDescription() {    
    let { userId } = useParams();
    const fakeData = 'this is test data put here by Zara to test backend server - seems to be working which is awesome!';


    function handleEventName(e) {
        localStorage.setItem("Event Name", e.target.value);

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

    //DO NOT DELETE THIS **ZARA - happy to discuss - this is 
    // function handleSubmit() {
    //     sendDataBackend(fakeData, userId);
    // }
    // let sendDataBackend = (formData, userId) => {
    //     let dataToPass = {
    //         googleId: userId,
    //         festivalData: formData
    //     }
    //     axios.post('/saveFormData', dataToPass)
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }

    return( 
        <>
        <h1>Step 1: Basic </h1>
        <form id="eventDescriptionForm">
        <label>Festival name</label>
        <input type='text' placeholder="Enter the details of your event here. Explain what people can expect,
        and why they should be there"
        onChange={handleEventName}
        ></input>
        <label>Start Date:</label><input type="date" onChange={handleStartDate}/>
        <label>End Date:</label><input type="date" onChange={handleEndDate}/>
        <label>Location: </label><input type="string" placeholder="Sofia, Bulgaria" onChange={handleLocation}/>
        <label>Enter a short blurb about your festival: </label>
        <textarea className="eventDescriptiontextarea" placeholder="Hogsozzle is a perfoming arts and music festival known for its hog rost" onChange={handleBlurb}></textarea>
        <div className="containerBasicInfo">
                <a href='/dashboard/123' className="item">Save and return to dashboard</a>
                <a href='/PreviewSite' className="item">Save and continue</a>
            </div>
        </form>
        </>
    )
}
