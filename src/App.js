import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Forms/loginForm.js';
import SignUp from './Components/Forms/signupForm.js';
import EventDescription from './Components/Forms/EventDescription.js';
import ContactDetails from './Components/Forms/contactDetails.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import AboutPage from './Components/AboutPage/AboutPage.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Navbar from './Components/Navbar/Navbar';
import PreviewSite from './PreviewSite/PreviewSite';
import DbData from './Components/DbData/DbData';
import FaqForm from './Components/Forms/FaqForm/FaqForm';
import TicketInfo from './TicketInfo/TicketInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            {/* Landing Page */}
            <Route exact path='/'>
              <Navbar />
              <LandingPage />
            </Route>
            {/* About page */}
            <Route exact path='/about'>
              <Navbar />
              <AboutPage />
            </Route>
            {/* user dashboard */}
            <Route exact path='/dashboard/:userId'>
              <Navbar />
              <Dashboard />
            </Route>
            {/* login page/form */}
            <Route exact path='/login'>
              <Navbar />
              <Login />
            </Route>
            {/* signup page/form */}
            <Route exact path='/signup'>
              <Navbar />
              <SignUp />
            </Route>
            {/* event details form */}
            <Route exact path='/eventDetailsForm'>
              <EventDescription />
            </Route>
            {/* event contact form */}
            <Route exact path='/contactForm'>
              <ContactDetails />
            </Route>
            {/* FAQ form */}
            <Route exact path='/faqForm'>
              <FaqForm />
            </Route>
            {/* Ticket Info form */}
            <Route exact path='/ticketInfoForm'>
              <TicketInfo />
            </Route>
            {/* Preview Site */}
            <Route exact path='/PreviewSite'>
              <PreviewSite />
            </Route>
            {/* test route to retrieve database */}
            <Route exact path='/db'>
              <DbData />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;