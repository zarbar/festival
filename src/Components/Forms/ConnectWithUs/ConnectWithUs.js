import React from 'react';
import './ConnectWithUs.css';

export default function ContactPage() {
    function socialMedia1Change(e) {
        localStorage.setItem('Social Media 1', e.target.value)
    }

    function emailChange(e) {
        localStorage.setItem('Email', e.target.value)
    }
    function addressChange(e) {
        localStorage.setItem('Address', e.target.value)
    }

    return (
        <>
            <h1>Step 5 - Connect with us</h1>
            <form className='connectForm'>
                <p>Social media link</p>
                <textarea className='infoTextArea' type="text" id='connect' onChange={socialMedia1Change}></textarea>

                <p>Add contact email </p>
                <textarea className='infoTextArea' type="email" id='connect' onChange={emailChange}></textarea>
                <p>Add company address</p>
                <textarea className='infoTextArea' type="text" id='connect' onChange={addressChange}></textarea>

                <div className="buttonBoxForms">
                    <a href='/dashboard/123' className="buttonBoxFormButton">Save and return to dashboard</a>
                    <a href='/PreviewSite' target="_blank" rel="noopener noreferrer" className="buttonBoxFormButton">Publish my site</a>
                </div>
            </form>
        </>
    )
}



