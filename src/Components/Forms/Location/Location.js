import React, { useState } from 'react';

export default function Location() {
    let [postcode, setPostcode] = useState("");
    function handlePostcodeChange(e) {
        setPostcode(e.target.value);
    }
    function accessDetails(e) {
        localStorage.setItem("Access", e.target.value)
    }
    let [weatherRequired, setWeatherRequired] = useState(false);
    function handleWeatherChange(e) {
        setWeatherRequired(!weatherRequired)
    }

    return (
        <>

         <h1>Step 3: Location</h1>
            <label>Add postcode to display location map: </label>
            <label>Add postcode to display location map: </label><input type="text" onChange={handlePostcodeChange} />
            {/* api here  */}
            <label>Add details about getting to your venue: </label>
      <input type="text" onChange={accessDetails} />
            <textarea placeholder="Eg. nearest aiports, train stations, taxis, parking, shuttle buses etc" />
            <input type="checkbox" onChange={handleWeatherChange} />
            <label>Add weather forecast feature to display a 7 day weather forecast widget to your homepage</label>
        </>
    )
}