import React from 'react';
import './App.css';
import concert from './images/concertphoto.jpg';
import logo from './images/Logos/yellowEnglebert.png';
import logo1 from './images/Logos/purpleEnglebert.png';
function App() {
    return (
        <div className="App">

            <header className="app-header">
                <span>Login</span>
                <span><img src={logo} alt='logo' /></span>
                <span>Menu</span>
            </header>

            <main className="wrapper">
                <div className='join-now'>
                    <p>FestiPal is the essential digital tool for creating bespoke, user-friendly web-apps.
            <br />
                        Designed for festival organisers, from indie events to international parties.
            </p>
                    <br /><br />
                    <button className='join'>Join now</button>
                </div>
            </main>

            <div className='about'>
                <h1>About FestiPal</h1>
                <br />
                <p>
                    FestiPal is a tool for event organisers to create web-apps for festivals.
              <br /><br />Simply select a design template, add your event information and build a stylish, reliable site that can be easily updated.
              <br /><br />FestiPal sites are responsive for mobile and desktop, meaning that your event site will look great across all devices.
              <br /><br />Why FestiPal?
              <br /><br />FestiPal is free and easy to use.It can be updated quickly..blabla. You can connect your FestiPal site to your social media accounts... talk about features
            </p>
            </div>

            <div className='created-by'>
                <div>
                    <img src={concert} alt='concert logo' />
                </div>
                <br /><br />
                <h1>Created by...</h1>
                <p>- name, github, profile</p>
                <p>- name, github, profile</p>
                <p>- name, github, profile</p>
                <p>- name, github, profile</p>
            </div>
            <footer>
                <div className='logo1'>
                    <img src={logo1} alt='logo1' />
                </div>
                <div className='footer-nav'>
                    <p>Get started</p>
                    <p>About</p>
                    <p>Login</p>
                </div>

            </footer>

            <div className='footer-end'>
                <p>KODIRI 2019</p>
            </div>
        </div>
    );
}

export default App;
