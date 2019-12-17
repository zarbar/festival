import React from 'react';
import './TicketInfo.css';
import festival from '../images/ticket/festival1.jpg';
import concert from '../images/ticket/concert.jpg';
import music from '../images/ticket/music.jpg';

export default function TicketInfo() {

  return (
    <div className='ticket'>
      <h1>Ticket info</h1>
      <form action="" id='userform'>
        <p>Add a ticket description</p>
        <textarea type='text' placeholder='Ticket description'></textarea>
        <p>Enter a link to your ticket provider</p>
        <textarea type='text' placeholder='Link of your ticket'></textarea>
        <p>Name your call to Action</p>
        <textarea type='text' placeholder='Name your call to action'></textarea>
        <p>Select your display image</p>
        <div className='slide-photo'>
          <div className='img-item'>
            <img src={festival} alt='go' />
            <input className='box' type="checkbox" name='festival' value="festival" />
          </div>
          <div className='img-item'>
            <img src={concert} alt='go' />
            <input className='box' type="checkbox" name='concert' value="concert" />
          </div>
          <div className='img-item'>
            <img src={music} alt='go' />
            <input className='box' type="checkbox" name='music' value="music" />
          </div>
        </div>
      </form>

    </div>
  )
}