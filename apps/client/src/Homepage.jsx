import { useEffect, useState } from "react";
import { fetchMessage } from "./api";

function HomePage() {
    const [message, setMessage] = useState("not recieved!");
    useEffect(() => {
        (async() => {
            const data = await fetchMessage();
            setMessage(data.message);
        })();
    }, []);
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <p>Message from server: {message}</p>
        </div>
    );
}

export default HomePage;