const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export async function fetchMessage() {
    try {
        const response = await fetch(`${API_URL}/api/message`, { method: "GET" });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching message:", error);
    }
}