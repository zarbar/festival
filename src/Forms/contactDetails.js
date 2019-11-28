import React from 'react';

export default function ContactDetails() {
    return (
        <>
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