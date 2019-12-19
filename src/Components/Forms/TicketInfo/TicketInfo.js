import React from 'react';
import './TicketInfo.css';
import festival from '../../../images/ticket/festival1.jpg';
import concert from '../../../images/ticket/concert.jpg';
import music from '../../../images/ticket/music.jpg';

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

        {/* <p>Select your display image:</p>
        <div className='slide-photo'>
          <div className='img-item'>
            <img src={festival} alt='go' />
            <input className='box' type="radio" name='festival' value="festival" />
          </div>
          <div className='img-item'>
            <img src={concert} alt='go' />
            <input className='box' type="radio" name='concert' value="concert" />
          </div>
          <div className='img-item'>
            <img src={music} alt='go' />
            <input className='box' type="radio" name='music' value="music" />
          </div>
        </div> */}
        <div className="containerTicketInfo">
          <a href='/dashboard/123' className="item">Save and return to dashboard</a>
          <a href='/location' className="item">Save and continue</a>
        </div>
      </form>
    </div>
  )



}