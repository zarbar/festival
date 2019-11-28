import React from 'react';
import './App.css';
import Login from './Forms/loginForm.js';
import SignUp from './Forms/signupForm.js';
import EventDescription from './Forms/EventDescription.js';
import ContactDetails from './Forms/contactDetails.js';
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