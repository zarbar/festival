import React, { useState } from 'react';

export default function ContactDetails() {
    function twitterChange(e) {
    localStorage.setItem('Twitter', e.target.value)
    }
    function facebookChange(e) {
        localStorage.setItem('Facebook', e.target.value)
    }
    function emailChange(e) {
        localStorage.setItem('Email', e.target.value)
    }
    function phoneChange(e) {
        localStorage.setItem('Phone Number', e.target.value)
    }
    console.log(localStorage)
    return (
        <>
        <h1>Contact Details for Your Event</h1>
        <h3>Remember, these are public!</h3>
        <form>
            <label>Twitter Handle:</label><input type="text" required onChange={twitterChange} placeholder="@myfestival" className="Twi"></input>
            <label>Facebook Page:</label> <input type="text"required placeholder="Your Festival" onChange={facebookChange}></input>
            <label>Contact Email:</label><input type="text" required placeholder="contact@crazyfest.com" onChange={emailChange}></input>
            <label>Phone Number:</label><input type="text" placeholder="+4412345 67890" onChange={phoneChange}></input>
        </form>
        <a href="/dashboard/:userId"><button className="item">Continue</button></a>
        </>
    )
}