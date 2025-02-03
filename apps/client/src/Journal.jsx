/*This is the journal part of the website (the main page) */
/* It starts with a typewriter effect */
// Also Added a Text Area that previews the entered text.
// and two buttons: Submit and Clear

import React , {useState} from "react";
import Typewriter from "react-typewriter-effect";
import './Journal.css'
import Navbar from './Navbar.jsx';

const TypewriterPrompt = () => {
    const messages = [
        "What makes you happy today?",
        "How are you feeling today?",
        "Write 3 things you loved about today.",
    ];

    // Ensure correct index cycling
    let lastIndex = parseInt(localStorage.getItem("messageIndex") || "0", 10);
    const nextIndex = (lastIndex + 1) % messages.length;
    localStorage.setItem("messageIndex", nextIndex);

    return (
        <div className="typewriter-text">
            <h1>
                <Typewriter
                    text={messages[nextIndex]}
                    cursorColor="black"
                    speed={500}
                    eraseSpeed={50}
                    typingDelay={500}
                />
            </h1>
        </div>
    );
};

const InputBox = ({ text, setText }) => {
    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <label>
                <b>Type here:</b>
                <textarea
                    id="user-journal-input"
                    name="myInput"
                    value={text}
                    onChange={handleChange}
                />
            </label>
            <p>
                <b>Your entry: </b>
                {text}
            </p>
        </div>
    );
};

const SubmitButtons = ({ setText }) => {
    const handleClick = () => {
        alert("Data Submitted!");
    };

    const handleClear = () => {
        setText(""); // Clears the input field
    };

    return (
        <div>
            <button className="journal-buttons" id="submit-button" onClick={handleClick}>
                Submit
            </button>
            <button className="journal-buttons" id="clear-button" onClick={handleClear}>
                Clear
            </button>
        </div>
    );
};

export default function Journal() {
    const [text, setText] = useState(""); // Lift state up

    return (
        <>
            <Navbar />
            <TypewriterPrompt />
            <InputBox text={text} setText={setText} />
            <SubmitButtons setText={setText} />
        </>
    );
}