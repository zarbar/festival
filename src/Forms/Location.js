import React from 'react';

//todo add google maps aaaqaaqqqqqqpi
export function Location() {
    return (
        <>
        <label>Add postcode to display location map: </label>
        {/* api here  */}
        <label>Add details about getting to your venue: </label>
        <textarea placeholder="Eg. nearest aiports, train stations, taxis, parking, shuttle buses etc"></textarea>
        <input type="checkbox"/><label>Add weather forecast feature to display a 7 day weather forecast widget to your homepage</label>
        </>
    )
}