
import React from 'react';
// import {useParams} from 'react-router-dom';;
// import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function EventDescription() {
    //DO NOT DELETE - this is for MONGODB
    //let { userId } = useParams();
    // const fakeData = 'this is test data put here by Zara to test backend server - seems to be working which is awesome!';


    function handleEventName(e) {
        localStorage.setItem("Event Name", e.target.value);
    }
    function handleStartDate(e) {
        localStorage.setItem("Start Date", e.target.value)
    }
    function handleEndDate(e) {
        localStorage.setItem("End date", e.target.value)
    }
    function handleLocation(e) {
        localStorage.setItem("Location", e.target.value)
    }
    function handleBlurb(e) {
        localStorage.setItem("Blurb", e.target.value)
    }
    console.log(localStorage)

    //DO NOT DELETE THIS **ZARA - happy to discuss - this is 
    // function handleSubmit() {
    //     sendDataBackend(fakeData, userId);
    // }
    // let sendDataBackend = (formData, userId) => {
    //     let dataToPass = {
    //         googleId: userId,
    //         festivalData: formData
    //     }
    //     axios.post('/saveFormData', dataToPass)
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }

    return (
        <div className='formPageMargin'>
            <h1 className='formTitle'>Step 1: Basic Details </h1>
            <Form className="formPageDashboard">
                <Form.Group>
                    <Form.Label>Festival Name</Form.Label >
                    <Form.Control type="text" placeholder="festival name" onChange={handleEventName} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" placeholder="Starting Date" onChange={handleStartDate} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" placeholder="End Date" onChange={handleEndDate} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>General Location</Form.Label>
                    <Form.Control type="text" placeholder="London, England" onChange={handleLocation} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Festival Description</Form.Label>
                    <Form.Control as="textarea" rows="5" onChange={handleBlurb} />
                </Form.Group>

                <Button variant="secondary" size="lg" block>
                    <a href='/dashboard/123' className="buttonBoxFormButton">Save and return to dashboard</a>
                </Button>

                <Button variant="secondary" size="lg" block>
                    <a href='/ticketInfoForm' className="buttonBoxFormButton">Save and continue</a>
                </Button>
            </Form>
        </div>
    )
}
