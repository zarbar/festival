import React from 'react';
import './Dashboard.css';

class Dashboard extends React.Component {

render() {
    return (
<>
        <h1>Your Dashboard</h1>
        <div className='container'>
        <div className='item getting'><a href = '../../map.js'>Getting there (location map)</a></div>
        <div className='item edit'><a href = '../../Forms/EventDescription.js'>Edit schedule</a></div>
        <div className='item ticket'>Ticket hub</div>
        <div className='item contact'><a href = '../ContactPage/ContactPage.js'>Contact details</a></div>
        </div>
        <div className='preview'>Preview my site</div>
</>
    )
}
}
export default Dashboard;