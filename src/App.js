import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import AuthState from './context/auth/AuthState';
import ProfileState from './context/profile/ProfileState';

function App() {
  return (
    <AuthState>
      <ProfileState>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
            </div>
          </div>
        </Router>
      </ProfileState>
    </AuthState>
  );
}

export default App;
