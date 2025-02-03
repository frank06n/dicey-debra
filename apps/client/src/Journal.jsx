/*This is the journal part of the website (the main page) */
/* It starts with a typewriter effect */
// Also Added a Text Area that previews the entered text.
// and two buttons: Submit and Clear

import React , {useState} from "react";
import Typewriter from "react-typewriter-effect";
import './Journal.css'

function typewriter_prompt(){
    const messages = [
        "What makes you happy today?",
        "How are you feeling today?",
        "Write 3 things you loved about today.",
    ];

    //Makes the messages appear one after the other, and then cycle continues

    let lastIndex = parseInt(localStorage.getItem("messageIndex") || "-1", 10);
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

}

function InputBox() {
    const [text, setText] = useState(""); 

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
            <p><b>Your entry: </b>{text}</p>
        </div>
    );
}

function submit_buttons(){
    const [message, setMessage] = useState(""); // State to manage text

    const handleClick = () => {
        alert("Data Submitted!");
    };

    const handleClear = () => {
        setMessage(""); 
    };

    return (
        <div>
            <button className="journal-buttons" id = "submit-button" onClick={handleClick}>Submit</button>
            <button className="journal-buttons" id = "clear-button" onClick={handleClear}>Clear</button>

            <p>{message}</p> {/* Display message */}
        </div>
    );
}

export default function Journal() {
    return (
        <>
            <div className="typewriter-text">
                <h1>{typewriter_prompt()}</h1>
            </div>

            <div className="input-text">
                {InputBox()}
            </div>

            <div className="submit-buttons">
                {submit_buttons()}
            </div>
        </>
    )
}
