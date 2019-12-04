import React from 'react';
import './CreatedBy.css';
import concert from '../../images/concertphoto.jpg';
import cam from './avatars/cam.png';
import chris from './avatars/chris.png';
import clarissa from './avatars/clarissa.png';
import mum from './avatars/mum.png';
import zara from './avatars/zara.png';

export default function CreatedBy() {

    const creators = [
        { name: 'Cameron Blackwood', url: '', avatar: cam },
        { name: 'Christopher Lynch', url: '', avatar: chris },
        { name: 'Clarissa Waldron', url: '', avatar: clarissa },
        { name: 'Mumtahin Zubayer Zihan', url: '', avatar: mum },
        { name: 'Zara Kletz', url: 'https://portfolio.zarakletz.now.sh/', avatar: zara }
    ];


    return (
        <>
            <div className='created-by'>
                <div>
                    <img src={concert} alt='concert logo' />
                </div>
                <br /><br />
                <h1>Created by:</h1>
                <div className='creators'>
                    {creators.map(creator => {
                        return (
                            <div className='creator' key={creator.name}>
                                <a href={creator.url} target="_blank" rel="noopener noreferrer" >
                                    <img src={creator.avatar} alt={creator.name}
                                        className='avatar' />
                                </a>
                                <p>{creator.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}