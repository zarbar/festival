import React from 'react'
import './Location.css'
import faq from '../../images/faq.jpg'


export default class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='guest-info'>
                <h1>Information</h1>
                <h2>Weather</h2>
                {/* <img src={sbtrkt} alt='sbtrkt logo' /> */}
                <h3>Today is -2°C</h3>
                <p></p>
                <h2>Getting here</h2>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187673.308693818!2d23.18386297025225!3d42.69534680336567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2suk!4v1575548854137!5m2!1sen!2suk" width="600" height="450" frameBorder="0" allowFullScreen=""></iframe>
                {/* <img src={gettingthere} alt='gettingthere logo' /> */}
                <p>For international festival goers, the best way to get to Hogsozzzle is to fly to Sofia airport,which is one hour away from where the festival takes place.  </p>
                <button>View more</button>
                <h1>FAQ</h1>
                <img src={faq} alt='faq logo' />
                </div>
        );
    }
}