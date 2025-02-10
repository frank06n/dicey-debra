/*This is the journal part of the website (the main page) */
/* It starts with a typewriter effect */
// Also Added a Text Area that previews the entered text.
// and two buttons: Submit and Clear

import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar.jsx";
import "./Journal.css";

const JournalPrompts = [
    "What makes you happy today?",
    "How are you feeling today?",
    "Write 3 things you loved about today."
];

const TypewriterPrompt = () => {
    const [index, setIndex] = useState(Math.floor(Math.random() * JournalPrompts.length)); 

    return (
        <div className="typewriter-wrapper">
            <h1 className="typewriter-text">
                <Typewriter
                    words={[JournalPrompts[index]]} 
                    cursor
                    cursorStyle="_"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={2000}
                />
            </h1>
        </div>
    );
};

const InputBox = ({ text, setText }) => {
    return (
        <div>
            <label>
                <b>Type your journal entry:</b>
                <textarea
                    id="user-journal-input"
                    name="journalEntry"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Start writing here..."
                />
            </label>
            <p>
                <b>Your entry preview:</b> {text}
            </p>
        </div>
    );
};

const SubmitButtons = ({ text, setText }) => {
    const handleSubmit = async () => {
        if (!text.trim()) {
            alert("Please enter a journal entry before submitting.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/journal/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ entry: text }),
            });

            if (response.ok) {
                alert("Journal entry saved!");
                setText("");
            } else {
                alert("Failed to save entry.");
            }
        } catch (error) {
            console.error("Error submitting journal:", error);
            alert("An error occurred while saving.");
        }
    };

    const handleClear = () => {
        setText("");
    };

    return (
        <div>
            <button className="journal-buttons" id="submit-button" onClick={handleSubmit}>
                Submit
            </button>
            <button className="journal-buttons" id="clear-button" onClick={handleClear}>
                Clear
            </button>
        </div>
    );
};

export default function Journal() {
    const [text, setText] = useState("");

    return (
        <>
            <Navbar />
            <TypewriterPrompt />
            <InputBox text={text} setText={setText} />
            <SubmitButtons text={text} setText={setText} />
        </>
    );
}
