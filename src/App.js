import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './Components/Forms/LoginForm/loginForm';
import SignUpForm from './Components/Forms/SignUpForm/signupForm.js';
import BasicInfo from './Components/Forms/BasicInfo/basicInfo';
import ConnectWithUs from './Components/Forms/ConnectWithUs/ConnectWithUs';
import LandingPage from './Components/LandingPage/LandingPage.js';
import AboutPage from './Components/AboutPage/AboutPage.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Navbar from './Components/Navbar/Navbar';
import PreviewSite from './PreviewSite/PreviewSite';
import DbData from './Components/DbData/DbData';
import FaqForm from './Components/Forms/FaqForm/FaqForm';
import TicketInfo from './Components/Forms/TicketInfo/TicketInfo';
import LocationForm from './Components/Forms/Location/Location';
import DashNav from './Components/Dashboard/Dashnav/Dashnav';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            {/* Landing Page */}
            <Route exact path='/'>
              <Navbar />
              {<LandingPage />}
            </Route>
            {/* About page */}
            <Route exact path='/about'>
              <Navbar />
              <AboutPage />
            </Route>
            {/* user dashboard */}
            <Route exact path='/dashboard/:userId'>
              <DashNav />
              <Dashboard />
            </Route>
            {/* login page/form */}
            <Route exact path='/login'>
              <Navbar />
              <LoginForm />
            </Route>
            {/* signup page/form */}
            <Route exact path='/signup'>
              <Navbar />
              <SignUpForm />
            </Route>
            {/* event details form */}
            <Route exact path='/basicInfo/'>
              <BasicInfo />
            </Route>
            {/* Location form */}
            <Route exact path='/location'>
              <LocationForm />
            </Route>
            {/* event contact form */}
            <Route exact path='/contactForm'>
              <ConnectWithUs />
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
      </Router >
    );
  }
}

export default App;