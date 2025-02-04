import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './Landing';  // New Landing Page
import Login from './Login';
import Register from './Register';
import Opening from './Opening';  // Main Home Page after login
import HomePage from './HomePage';
import Journal from './Journal';
import Profile from './Profile';

// Simulated authentication check
const isLoggedIn = () => {
    return localStorage.getItem('authToken') !== null; 
};

function App() {
    return (
        <Router>
            <Routes>
                {/* Landing Page first */}
                <Route path="/" element={<Landing />} /> 

                {/* Register/Login Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* After login, Opening.jsx is the main home */}
                <Route path="/opening" element={isLoggedIn() ? <Opening /> : <Navigate to="/login" />} />

                {/* Authenticated Routes */}
                <Route path="/home" element={isLoggedIn() ? <HomePage /> : <Navigate to="/login" />} />
                <Route path="/journal" element={isLoggedIn() ? <Journal /> : <Navigate to="/login" />} />
                <Route path="/profile" element={isLoggedIn() ? <Profile /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;