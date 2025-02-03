// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Opening from './Opening';
import HomePage from './Homepage';
import Journal from './Journal';
import Profile from './Profile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Opening />} />         {/* Path for Page1 */}
                <Route path="/home" element={<HomePage />} />    {/* Path for Page2 */}
                <Route path="/journal" element={<Journal />} />  {/* Path for Main Journal Page*/}
                <Route path="/profile" element={<Profile />} />  {/* Path for Profile Page*/}
            </Routes>
        </Router>
    );
}

export default App;