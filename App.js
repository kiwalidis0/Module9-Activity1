import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyData from './RegistrationForm/MyData';
import RegistrationForm from './RegistrationForm/registration';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">User Data</Link></li>
            <li><Link to="/register">Registration Form</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<h2>Welcome! Choose an option from the menu.</h2>} />
            <Route path="/users" element={<MyData />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
