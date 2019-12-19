import React from 'react';
import './Dashboard.css';
import contact from './icons/contact.png';
import faq from './icons/FAQ.png';
import info from './icons/info.png';
import location from './icons/location.png';
import ticket from './icons/ticket.png';

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

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    dashboardComponents = () => {
        return dashboardItems.map(({ id, link, title, icon }) => {
            return (
                <div className='itemDash' key={icon}>
                    <a href={link} className='aDashboard'>
                        <img src={icon} alt={id} className='dashboardIcon' />
                <div className='icontitle'/> {title}
                </a>
                </div>
                
            )
        })
    }

    render() {
        return (
            <>
                <div className='dashboardContainer'>
                    <span id="dashHeader">Welcome {localStorage.getItem('userName')}!</span>
                    <div className='buttonContainer'>
                        {this.dashboardComponents()}
                    </div>
                    <a href='/PreviewSite' className='aDashboard'>
                        <button className='previewDash'>Preview my site
                            </button>
                    </a>
                </div>
            </>
        );
    }
}

export default Dashboard;