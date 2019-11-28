import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Forms/loginForm.js';
import SignUp from './pages/Forms/signupForm.js';

function App() {
  return (
    <div className="App">
      <Login/>
      <SignUp/>
    </div>
  );
}

export default App;
