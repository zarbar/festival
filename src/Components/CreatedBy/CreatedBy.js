import React from 'react';
import './CreatedBy.css';
import concert from '../../images/concertphoto.jpg';
import cam from './avatars/cam.png';
import chris from './avatars/chris.png';
import clarissa from './avatars/clarissa.png';
import mum from './avatars/mum.png';
import zara from './avatars/zara.png';
import { Container, Row, Col } from 'react-bootstrap';

export default function CreatedBy() {

    const creators = [
        { name: 'Cameron Blackwood', url: 'https://github.com/Reikon95', avatar: cam },
        { name: 'Christopher Lynch', url: 'https://github.com/ChristopherLynch31', avatar: chris },
        { name: 'Clarissa Waldron', url: 'https://github.com/ClarissaWaldron', avatar: clarissa },
        { name: 'Mumtahin Zubayer Zihan', url: 'https://github.com/Mumtahinzihan', avatar: mum },
        { name: 'Zara Kletz', url: 'https://zarakletz.rocks/', avatar: zara }
    ];


    return (
        <>
            <div className='created-by'>
                <div>
                    <img src={concert} alt='concert logo' />
                </div>
                <br /><br />
                <h1>Created by:</h1>

                <Container className='creators'>
                    <Row>
                        {creators.map(creator => {
                            return (
                                <Col key={creator.name}>
                                    <a href={creator.url} target="_blank" rel="noopener noreferrer" >
                                        <img src={creator.avatar} alt={creator.name}
                                            className='avatar' />
                                    </a>
                                    <p>{creator.name}</p>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    )
}