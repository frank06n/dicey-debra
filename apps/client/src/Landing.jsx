import React from 'react';
import './Landing.css';
import Typewriter from 'react-typewriter-effect';

const Landing = () => {
    return (
        <div className="landing">
            <h1 className = "typewriter-text">
            <Typewriter
                text = "Welcome to EmPower!"
                cursorColor="black"
                speed={500}
                eraseSpeed={50}
                typingDelay={500}
            />
            </h1>
            <p>EmPower is a journaling app that helps you track your mood and emotions.</p>
            <p>Sign up or log in to get started!</p>
            <p>
                <a className = "landing-buttons" href = "/login">Login</a>
                <a className = "landing-buttons" href = "/register">Register</a>
            </p>
        </div>
    );
}

export default Landing;