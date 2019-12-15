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
                    <p>Get started</p>
                    <p>About</p>
                    <p>Login</p>
                </div>

            </footer>

            <div className='footer-end'>
                <p>KODIRI 2019</p>
            </div>

        </>
    )
}