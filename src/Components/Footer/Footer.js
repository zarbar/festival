import React from 'react';
import './Footer.css';
import logo1 from '../../images/Logos/purpleEnglebert.png';

export default function Footer() {
    return (
        <>
            <footer>
                <div className='logo1'>
                    <img src={logo1} alt='logo1' />
                </div>
                <div className='footer-nav'>
                    <a href="/signup"><p>Get started</p></a>
                    <a href="/about"><p>About</p></a>
                    <a href="/login"><p>Log In</p></a>
                </div>

            </footer>

            <div className='footer-end'>
                <p>KODIRI 2019</p>
            </div>

        </>
    )
}