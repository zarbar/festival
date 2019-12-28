import React from 'react';
import { Form, Button } from 'react-bootstrap';


export default function TicketInfo() {

  function handleTicketDescription(e) {
    localStorage.setItem("Ticket Description", e.target.value)
  }
  function ticketLink(e) {
    localStorage.setItem("Ticket Link", e.target.value)
  }

  return (
    <div className='formPageMargin'>
      <h1 className='formTitle'>Step 2: Ticket info</h1>
      <Form className="formPageDashboard">
        <Form.Group>
          <Form.Label>Ticket Description</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={handleTicketDescription} placeholder="Number of tickets available..." />
        </Form.Group>


        <Form.Group>
          <Form.Label>Enter a link to your ticket provider</Form.Label>
          <Form.Control type="text" placeholder="https://www.ticketbuyer.co.uk/myFestivalLink" onChange={ticketLink} />
        </Form.Group>



        <Button variant="secondary" size="lg" block>
          <a className='buttonAnchor buttonBoxFormButton' href='/dashboard/123'>Save and return to dashboard</a>
        </Button>

        <Button variant="secondary" size="lg" block>
          <a href='/location' className="buttonBoxFormButton">Save and continue</a>
        </Button>
      </Form>
    </div>
  )



}
