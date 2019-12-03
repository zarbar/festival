import React from 'react';

export default function ContactDetails() {
    return (
        <>
        <h1>Contact Details for Your Event</h1>
        <h3>Remember, these are public!</h3>
        <form>
            <label>Twitter Handle:</label><input type="text" required></input>
            <label>Facebook Page:</label> <input type="text"required></input>
            <label>Contact Email:</label><input type="text" required></input>
            <label>Phone Number:</label><input type="text"></input>
        </form>
        <button className="item">Continue</button>
        </>
    )
}