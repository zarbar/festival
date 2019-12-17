import React from 'react';
import './ContactPage.css';

class ContactPage extends React.Component {

render() {
    return (
<>
        <form>
            <h1>Step 5 - Connect with us</h1>
            <p>Got a newsletter? Let people subscribe</p>
            <input type="text"></input>
            <p>Add social media links:</p>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <p>Add contact email</p>
            <input type="text"></input>
            <p>Add company address</p>
            <input type="text"></input>
        </form>
        <div className="container">
            <button className="item">Save</button>
            <button className="item">Preview</button>
            <button className="item">Next</button>
        </div>
</>
    )
}
}
export default ContactPage; 