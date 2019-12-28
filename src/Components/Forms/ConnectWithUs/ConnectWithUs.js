import React from 'react';
import { Form, Button } from 'react-bootstrap';

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

        <div className='formPageMargin'>
            <h1 className='formTitle'>Step 5 - Connect with us</h1>
            <Form className="formPageDashboard">
                <Form.Group>
                    <Form.Label>Social media link</Form.Label>
                    <Form.Control type="text" onChange={socialMedia1Change}>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Contact email </Form.Label>
                    <Form.Control type="email" id='connect' onChange={emailChange}>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Add company address</Form.Label>
                    <Form.Control className='infoTextArea' type="text" id='connect' onChange={addressChange} />
                </Form.Group>

                <Button variant="secondary" size="lg" block>
                    <a href='/dashboard/123' className="buttonBoxFormButton">Save and return to dashboard</a>
                </Button>

                <Button variant="secondary" size="lg" block>
                    <a href='/PreviewSite' target="_blank" rel="noopener noreferrer" className="buttonBoxFormButton">Publish site</a>
                </Button>

            </Form>
        </div>
    )
}



