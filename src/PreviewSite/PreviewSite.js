import React from 'react';
import './PreviewSite.css'
import NavBar from './NavBar/NavBar'
import FestivalInfo from './FestivalInfo/FestivalInfo'
import hogsozzle1 from '../images/hogsozzle-img.jpg';
import sbtrkt from '../images/sbtrkt.jpg';
import faq from '../images/faq.jpg';


export default class PreviewSite extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {}
    }
    render () {
        return (
        <>
        <div className='hogsozzle'>
           <NavBar/>
           <FestivalInfo/>
               


            <div className='first-image'>
                <img src={hogsozzle1} alt='hogsozzle1 logo' />
            </div>
            
            <div className='buy-tickets'>
                <p>Super early bird passes on sale now.<br/> Get your ticket to Bulgaria’s hottest<br/> summer party.</p>
                <button className='button'>Buy Tickets</button>
            </div>
            <div className='guest-info'>
                <h1>Information</h1>
                <h2>Weather</h2>
                <img src={sbtrkt} alt='sbtrkt logo' />
                <h3>Today is -2°C</h3>
                <p></p>
                <h2>Getting here</h2>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187673.308693818!2d23.18386297025225!3d42.69534680336567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2suk!4v1575548854137!5m2!1sen!2suk" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
                {/* <img src={gettingthere} alt='gettingthere logo' /> */}
                <p>For international festival goers, the best way to get to Hogsozzzle is to fly to Sofia airport,which is one hour away from where the festival takes place.  </p>
                <button>View more</button>
                <h1>FAQ</h1>
                <img src={faq} alt='faq logo' />
                <p>What is Hogsozzle, where does it take place and when is it? Can I perform at the festival or operate a stall? Can I bring my own alcohol?What will the weather be like? What are accomodation options if I’m not camping? You can find the answers to all these questions and more in this section.</p>
            </div>
            <div className='connect'> 
                <h2>Connect with us</h2>
                <p>Sign up to our mailing list for special offers, news and updates</p>
                <input type='text' placeholder='Enter email'/>
            </div>
            <div className='subscribe'>
                <button>Subscribe</button>
                <p>social media icons tobe added when we have time.........!!!!!!</p>
                <p className='email'>Email us: <a href='mailto:https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin
                '>info@hogsozzle.com</a></p>
                <p>Address: Sofia, Bulgaria</p>
            </div>
        </div>

        </>
    )}
}