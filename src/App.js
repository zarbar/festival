import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Forms/loginForm.js';
import SignUp from './Forms/signupForm.js';
import EventDescription from './Forms/EventDescription.js';
import ContactDetails from './Forms/contactDetails.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import AboutPage from './Components/AboutPage/AboutPage.js';
import ContactPage from './Components/ContactPage/ContactPage.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Navbar from './Components/Navbar/Navbar';
import PreviewSite from './PreviewSite/PreviewSite';

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
              <Dashboard />
            </Route>
            <Route exact path='/login'>
            <Login />
            </Route>
            <Route exact path='/signup'>
            <SignUp />
            </Route>
            <Route exact path='/loggedInTrue'>
            <EventDescription />
            </Route>
            <Route exact path='/contactdetails'>
              <ContactDetails/>
            </Route>
            <Route exact path='/PreviewSite'><PreviewSite/></Route>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;