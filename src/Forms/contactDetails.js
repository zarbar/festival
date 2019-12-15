import React from 'react';

export default function ContactDetails() {
    return (
        <>
        <h1>Contact Details for Your Event</h1>
        <h3>Remember, these are public!</h3>
        <form>
            <label>Twitter Handle:</label><input type="text" required placeholder="@myfestival"></input>
            <label>Facebook Page:</label> <input type="text"required placeholder="Your Festival"></input>
            <label>Contact Email:</label><input type="text" required placeholder="contact@crazyfest.com"></input>
            <label>Phone Number:</label><input type="text" placeholder="+44"></input>
        </form>
        <a href="/dashboard/:userId"><button className="item">Continue</button></a>
        </>
    )
}