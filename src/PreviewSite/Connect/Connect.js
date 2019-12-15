import React from 'react'
import './Connect.css'


export default class Connect extends React.Component {
 constructor (props) {
     super (props)
     this.state = {}
 }

 render () {
     return (
         <>
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
    </>
     );
 }
}