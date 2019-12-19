import React from 'react';
import '../../Navbar/Navbar.css';
import logo from '../../../images/Logos/yellowEnglebert.png';
import menu from '../../Navbar/menu.png';

class DashNav extends React.Component {
    constructor() {
        super();
        this.state = {
            menu: 'menuClosed',
            opacity: 'opacityOn',
        };
    }

    toggleMenu() {
        this.state.menu === 'menuClosed' ?
            this.setState({ menu: 'menuOpen', opacity: 'opacityOff' }) :
            this.setState({ menu: 'menuClosed', opacity: 'opacityOn' });
    }

    render() {
        return (
            <>
                <div className="navbarBody" id={this.state.opacity}>
                    <span className='navbarItem'><a href='/'>Logout</a></span>
                    <span className='navbarItem'>
                        <a href='/'><img src={logo} alt='logo' /></a>
                    </span>
                    <span className='navbarItem'>
                        <button id='burgerButton' onClick={() => this.toggleMenu()}><img id='burger' src={menu} alt='menu' />
                        </button>
                    </span>
                </div>

                <div className={this.state.menu} >
                    <div className='navMenu' id='menuShow'>
                        <a className="menuItem topItem" href="/signup" onClick={() => { this.toggleMenu() }}>Sign up</a>
                        <a className="menuItem" href="/login" onClick={() => { this.toggleMenu() }}>Login</a>
                        <a className="menuItem" href="/about" onClick={() => { this.toggleMenu() }}>About</a>
                    </div>
                </div>

            </>
        )
    }
}

export default DashNav; 