import React from 'react';
import './ConnectWithUs.css';

export default class ContactPage extends React.Component {

    render() {
        return (
            <>
                <h1>Step 5 - Connect with us</h1>
                <form className='connectForm'>
                    <p>Add social media links:</p>
                    <textarea className='infoTextArea' type="text" id='connect'></textarea>
                    <textarea className='infoTextArea' type="text" id='connect'></textarea>
                    <textarea className='infoTextArea' type="text" id='connect'></textarea>
                    <p>Add contact email </p>
                    <textarea className='infoTextArea' type="text" id='connect'></textarea>
                    <p>Add company address</p>
                    <textarea className='infoTextArea' type="text" id='connect'></textarea>
                    <div className="containerEndButtons">
                        <button className="item">Save</button>
                        <button className="item">Preview</button>
                        <button className="item">Next</button>
                    </div>
                </form>

            </>
        )
    }
}


