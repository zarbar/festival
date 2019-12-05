import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Forms/loginForm.js';
import SignUp from './Forms/signupForm.js';
import EventDescription from './Forms/EventDescription.js';
import ContactDetails from './Forms/contactDetails.js';
// import SimpleMap from './map.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import AboutPage from './Components/AboutPage/AboutPage.js';
import ContactPage from './Components/ContactPage/ContactPage.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Navbar from './Components/Navbar/Navbar';
import Hogsozzle from './mumtahin2/Mumtahin2.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Navbar />
              <LandingPage />
            </Route>
            <Route exact path='/about'>
              <Navbar />
              <AboutPage />
              <ContactPage />
            </Route>
            <Route exact path='/dashboard/:userId'>
              <Navbar />
              <Dashboard />
            </Route>
            <Route exact path='/login'>
              <Navbar />
              <Login />
            </Route>
            <Route exact path='/signup'>
              <Navbar />
              <SignUp />
            </Route>
            <Route exact path='/loggedInTrue'>
              <Navbar />
              <EventDescription />
              <ContactDetails />
            </Route>
            {/* <SimpleMap /> */}
          </Switch>
          <Hogsozzle />

        </div>
      </Router>
    );
  }
}

export default App;