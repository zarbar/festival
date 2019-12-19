import React, { useState } from 'react';

export default function Location() {
    let [postcode, setPostcode] = useState("");
    function handlePostcodeChange(e) {
        setPostcode(e.target.value);
        localStorage.setItem("postcode", e.target.value)
    }
    function accessDetails(e) {
        localStorage.setItem("Access", e.target.value)
    }


    return (
        <>
            <label>Add postcode of your event: </label><input type="text" onChange={handlePostcodeChange}/>
            <label>Add details about getting to your venue: </label><input type="text" onChange={accessDetails}/>
            <textarea placeholder="Eg. nearest aiports, train stations, taxis, parking, shuttle buses etc"></textarea>
      />
      <div className="containerLocation">
                        <a href='/dashboard/123' className="item">Save and return to dashboard</a>
                        <a href='/faqForm' className="item">Save and continue</a>
                    </div>

        </>
    )
}