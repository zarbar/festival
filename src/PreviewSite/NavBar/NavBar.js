import React from 'react'
import './NavBar.css'
import hogsozzle from '../../images/Logos/hogsozzle.png';

export default class NavBar extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {}
    }
    render () {
        return ( 
        <div className='navbar'>
        <img src={hogsozzle} alt='hogsozzle logo' />
    </div>);
    }
}