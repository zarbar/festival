import React from 'react';
import './location.css';

export default function Location() {

    function handlePostcodeChange(e) {
        localStorage.setItem("postcode", e.target.value)
    }

    function accessDetails(e) {
        localStorage.setItem("Access", e.target.value)
    }

    return (
        <div className='locationFormPage'>
            <h1>Step 3: Location</h1>
            <form id='locationInfoForm'>
                <p>Add full event location: </p>
                <input className='addressLineInput' type="text" onChange={handlePostcodeChange} placeholder='Address Line 1' />
                <input className='addressLineInput' type="text" onChange={handlePostcodeChange}
                    placeholder='Address Line 2' />
                <input className='addressLineInput' type="text" onChange={handlePostcodeChange} placeholder='Address Line 3' />
                <p>Add details about getting to your venue: <br /></p>
                <textarea className="infoTextArea" type="text" onChange={accessDetails} placeholder="Eg. nearest aiports, train stations, taxis, parking, shuttle buses etc" />
                <div className="containerLocation">
                    <a href='/dashboard/123' className="item">Save and return to dashboard</a>
                    <a href='/faqForm' className="item">Save and continue</a>
                </div>
            </form>
        </div>
    )
}