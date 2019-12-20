import React from 'react';
import './location.css';

export default function Location() {

    function handleAddressLineOne(e) {
        localStorage.setItem("Address Line 1", e.target.value)
    }
    function handleAddressLineTwo(e) {
        localStorage.setItem("Address Line 2", e.target.value)
    }
    function handleAddressLineThree(e) {
        localStorage.setItem("Address Line 3", e.target.value)
    }

    function accessDetails(e) {
        localStorage.setItem("Access", e.target.value)
    }

    return (

        <div className='locationFormPage'>
            <h1>Step 3: Location</h1>
            <form id='locationInfoForm'>
                <p>Add full event location: </p>

                <input className='addressLineInput' type="text" onChange={handleAddressLineOne} placeholder='Address Line 1' />

                <input className='addressLineInput' type="text" onChange={handleAddressLineTwo}
                    placeholder='Address Line 2' />

                <input className='addressLineInput' type="text" onChange={handleAddressLineThree} placeholder='Address Line 3' />

                <p>Add details about getting to your venue: <br /></p>
                <textarea className="infoTextArea" type="text" onChange={accessDetails} placeholder="Eg. nearest aiports, train stations, taxis, parking, shuttle buses etc" />
                <div className="buttonBoxForms">
                    <a href='/dashboard/123' className="buttonBoxFormButton">Save and return to dashboard</a>
                    <a href='/faqForm' className="buttonBoxFormButton">Save and continue</a>
                </div>
            </form>
        </div>
    )
}