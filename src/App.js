import React from 'react';
import './App.css';
import Login from './pages/Forms/loginForm.js';
import SignUp from './pages/Forms/signupForm.js';
import EventDescription from './pages/Forms/EventDescription.js';
import ContactDetails from './pages/Forms/contactDetails.js';
import SimpleMap from './map.js';
function App() {
  return (
    <div className="App">
      <Login/>
      <SignUp/>
      <EventDescription/>
      <ContactDetails/>
      <SimpleMap/>
    </div>
  );
}

export default App;