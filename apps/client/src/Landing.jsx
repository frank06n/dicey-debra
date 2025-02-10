import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Landing.css";

const Landing = () => {
    return (
        <div className="landing">
            <h1 className="typewriter-text">
                <Typewriter
                    words={["Welcome to EmPower!"]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={40}
                    delaySpeed={1500}
                />
            </h1>
            <p>EmPower is a journaling app that helps you track your mood and emotions.</p>
            <p>Sign up or log in to get started!</p>
            <div className="landing-buttons-container">
                <a className="landing-buttons" href="/login">Login</a>
                <a className="landing-buttons" href="/register">Register</a>
            </div>
        </div>
    );
};

export default Landing;
