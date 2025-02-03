import { useState } from 'react'
import { fetchMessage } from "./api";
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    const data = await fetchMessage();
    setMessage(data.message);
  };

  return (
    <div>
      <h1>Simple MERN App</h1>
      <button onClick={handleClick}>Get Message</button>
      <p>Hello World!</p>
      <p>Response: {message}</p>
    </div>
  );
}

export default App;
