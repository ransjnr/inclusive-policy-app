import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import PolicyDashboard from './components/PolicyDashboard';

// Suggested code may be subject to a license. Learn more: ~LicenseLog:47417745.
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/policies' component={PolicyDashboard} />
      </Routes>
    </Router>
  );
}

export default App;
