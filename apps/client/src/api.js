const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
// Add VITE_BACKEND_URL in Vercel's env variables under the frontend deployment

export async function fetchMessage() {
    try {
        const response = await fetch(`${API_URL}/api/extras`, { method: "GET" });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching message:", error);
    }
}

// Send Message to Backend
async function sendMessage(text) {
  try {
    const response = await fetch(`${API_URL}/api/message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

// Fetch Messages from Backend
async function fetchMessages() {
  try {
    const response = await fetch(`${API_URL}/api/messages`);
    const messages = await response.json();
    console.log(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
}

// Example Usage
sendMessage("Hello, MongoDB!");  // Saves message to DB
fetchMessages();  // Retrieves messages from DB
