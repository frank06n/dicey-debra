const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
// Add VITE_BACKEND_URL in Vercel's env variables under the frontend deployment

// Fetch a simple message from the backend
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

// Send a message to the backend
export async function sendMessage(text) {
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

// Fetch all messages from the backend
export async function fetchMessages() {
    try {
        const response = await fetch(`${API_URL}/api/messages`);
        const messages = await response.json();
        console.log(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
    }
}

// User Registration
export async function registerUser(userData) {
    try {
        const response = await fetch(`${API_URL}/api/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        console.log("User Registration:", data);
        return data;
    } catch (error) {
        console.error("Error registering user:", error);
    }
}

// User Login
export async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_URL}/api/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log("User Login:", data);
        return data;
    } catch (error) {
        console.error("Error logging in user:", error);
    }
}

// Example Usage:
const newUser = {
    name: "John Doe",
    email: "john@example.com",
    password: "securepassword",
    dob: "2000-01-01",
    phone: "+1234567890",
    ex: "None",
    occupation: "Software Developer",
    bloodGroup: "O+"
};

registerUser(newUser);
loginUser("john@example.com", "securepassword");
sendMessage("Hello, MongoDB!");
fetchMessages();
