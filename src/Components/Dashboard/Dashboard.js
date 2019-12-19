import React from 'react';
import './Dashboard.css';
import contact from './icons/contact.png';
import faq from './icons/FAQ.png';
import info from './icons/info.png';
import location from './icons/location.png';
import ticket from './icons/ticket.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';

let dashboardItems = [
    {
        id: 'info',
        link: '/basicInfo',
        title: 'Basic Info',
        icon: info,
    },
    {
        id: 'ticket',
        link: '/ticketInfoForm',
        title: 'Tickets',
        icon: ticket,
    },
    {
        id: 'location',
        link: '/location',
        title: 'Location',
        icon: location,
    },
    {
        id: 'FAQ',
        link: '/faqForm',
        title: 'FAQ\'s',
        icon: faq,
    },
    {
        id: 'contact',
        link: '/contactForm',
        title: 'Contact',
        icon: contact,
    },
];

export default function Dashboard() {
    const { userId } = useParams();

React.useEffect((userId) => {
    if (userId !== '123') {
        axios.get('/userData')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
  
}, [userId])

    let dashboardComponents = () => {
        return dashboardItems.map(({ id, link, title, icon }) => {
            return (
                <div className='itemDash' key={icon}>
                    <a href={link} className='aDashboard'>
                        <img src={icon} alt={id} className='dashboardIcon' />
                        <div className='icontitle' /> {title}
                    </a>
                </div>

            )
        })
    }

    return (
        <>
            <div className='dashboardContainer'>
                <span id="dashHeader">
                    Welcome {localStorage.getItem('userName')}!
                    </span>
                <div className='buttonContainer'>
                    {dashboardComponents()}
                </div>
                <a href='/PreviewSite' className='aDashboard' target="_blank" rel="noopener noreferrer">
                    <button className='previewDash'>Preview my site
                            </button>
                </a>
            </div>
        </>
    );
}