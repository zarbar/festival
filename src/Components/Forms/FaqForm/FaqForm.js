import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class FaqBackend extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputs: [] };
    }

    handleFaq1(e) {
        localStorage.setItem("FAQ1", e.target.value)
    }
    handleFaq1Answer(e) {
        localStorage.setItem("FAQ1Answer", e.target.value)
    }

    handleFaq2(e) {
        localStorage.setItem("FAQ2", e.target.value)
    }
    handleFaq2Answer(e) {
        localStorage.setItem("FAq2Answer", e.target.value)
    }


    render() {
        return (
            <div className='formPageMargin'>
                <h1 className='formTitle'>Step 4: FAQs</h1>
                <h2 className='formTitle'>Please add your frequently asked questions for attendees</h2>

                <Form className="formPageDashboard">

                    <Form.Group>
                        <Form.Label>Question 1</Form.Label >
                        <Form.Control type="text" placeholder="Question" onChange={this.handleFaq1} />
                        <Form.Control as="textarea" placeholder="Answer" rows="2" onChange={this.handleFaq1Answer} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Question 2</Form.Label >
                        <Form.Control type="text" onChange={this.handleFaq2} placeholder="Question" />
                        <Form.Control as="textarea" rows="2" onChange={this.handleFaq2Answer} placeholder="Answer" />
                    </Form.Group>



                    <Button variant="secondary" size="lg" block>
                        <a href='/dashboard/123' className="buttonBoxFormButton">
                        Save and return to dashboard</a>
                    </Button>

                    <Button variant="secondary" size="lg" block>
                        <a href='/contactForm' className="buttonBoxFormButton">Save and continue</a>
                    </Button>
                </Form>
            </div>
        );
    }
}