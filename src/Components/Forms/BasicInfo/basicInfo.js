import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import './basicInfo.css';
import axios from 'axios';

export default function EventDescription() {    
    let { userId } = useParams();
    const fakeData = 'this is test data put here by Zara to test backend server - seems to be working which is awesome!';

    let [submit, setSubmit] = useState('')
    function handleSubmit() {
        setSubmit('Splendid, thank you!');
        sendDataBackend(fakeData, userId);
    }

    let sendDataBackend = (formData, userId) => {
        let dataToPass = {
            googleId: userId,
            festivalData: formData
        }
        axios.post('/saveFormData', dataToPass)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
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
        </>
    )
}