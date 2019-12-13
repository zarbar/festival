import React, { useState } from 'react';

export default function ContactDetails() {
    let [twitter, setTwitter] = useState('')
    // function handleChangeTwitter(e) {
    //     setTwitter(e.target.value)
    // }
    // console.log(twitter);
    return (
        <>
        <h1>Contact Details for Your Event</h1>
        <h3>Remember, these are public!</h3>
        <form>
            <label>Twitter Handle:</label><input type="text" required placeholder="@myfestival" className="Twi"></input>
            <label>Facebook Page:</label> <input type="text"required placeholder="Your Festival" value=""></input>
            <label>Contact Email:</label><input type="text" required placeholder="contact@crazyfest.com" value=""></input>
            <label>Phone Number:</label><input type="text" placeholder="+4412345 67890" value=""></input>
        </form>
        <a href="/dashboard/:userId"><button className="item" onClick={setTwitter()}>Continue</button></a>
        </>
    )
}