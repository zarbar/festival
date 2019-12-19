import React from 'react';
import './TicketInfo.css';


export default function TicketInfo() {

  function handleTicketDescription(e) {
    localStorage.setItem("Ticket Description", e.target.value)
  }
  function ticketLink(e) {
    localStorage.setItem("Ticket Link", e.target.value)
  }

  return (
    <div className='ticket'>
      <h1>Step 2: Ticket info</h1>
      <form action="" id='ticketInfoForm'>

        <p>Add a ticket description</p>
        <textarea className="infoTextArea" type='text' placeholder='Ticket description' onChange={handleTicketDescription}></textarea>
        <p>Enter a link to your ticket provider</p>

        <textarea className="infoTextArea" type='text' placeholder='Link of your ticket' onChange={ticketLink}></textarea>

        <div className="containerTicketInfo">
          <a href='/dashboard/123' className="item">Save and return to dashboard</a>
          <a href='/location' className="item">Save and continue</a>
        </div>
      </form>
    </div>
  )



}