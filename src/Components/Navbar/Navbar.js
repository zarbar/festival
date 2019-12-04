import React from 'react';
import './Navbar.css';
import logo from '../../images/Logos/yellowEnglebert.png';

class Navbar extends React.Component {

    render() {
        return (
            <>
                <header className="app-header">
                    <span>Login</span>
                    <span><img src={logo} alt='logo' /></span>
                    <span>Menu</span>
                </header>
            </>
        )
    }
}

export default Navbar; 