import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Location() {

    function handleAddressLineOne(e) {
        localStorage.setItem("Address Line 1", e.target.value)
    }
    function handleAddressLineTwo(e) {
        localStorage.setItem("Address Line 2", e.target.value)
    }
    function handleAddressLineThree(e) {
        localStorage.setItem("Address Line 3", e.target.value)
    }

    function accessDetails(e) {
        localStorage.setItem("Access", e.target.value)
    }

    return (

        <div className='formPageMargin'>
            <h1 className='formTitle'>Step 3: Location</h1>
            <Form className="formPageDashboard">

                <Form.Group>
                    <Form.Label>Full Event Location</Form.Label >
                    <Form.Control type="text" placeholder="Address Line 1" onChange={handleAddressLineOne} />
                    <Form.Control type="text" placeholder="Address Line 2" onChange={handleAddressLineTwo} />
                    <Form.Control type="text" placeholder="Address Line 3" onChange={handleAddressLineThree} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Details about getting to your venue</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={accessDetails} />
                </Form.Group>

                <Button variant="secondary" size="lg" block>
                    <a href='/dashboard/123' className="buttonBoxFormButton">Save and return to dashboard</a>
                </Button>

                <Button variant="secondary" size="lg" block>
                    <a href='/faqForm' className="buttonBoxFormButton">Save and continue</a>
                </Button>
            </Form>
        </div>
    )
}
