import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from './user.js';  //Imports both schema and routes
import journalRoutes from './journal.js'; //Same here

dotenv.config();
const app = express();

// Allow requests from your frontend
// app.use(cors({
//     origin: "https://test-fachie-frontend.vercel.app"
// }));

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("✅ Connected to MongoDB"))
      .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Add MONGO_URI in Vercel's env variables under the frontend deployment

app.use('/api/users', userRoutes);  
app.use('/api/journal', journalRoutes);

// Define a simple schema
const MessageSchema = new mongoose.Schema({
    text: String,
    createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model("Message", MessageSchema);

// API Endpoints
app.post("/api/message", async (req, res) => {
    try {
        const newMessage = new Message({ text: req.body.text });
        await newMessage.save();
        res.status(201).json({ message: "Message saved!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save message"+error.stack });
    }
});

app.get("/api/messages", async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch messages "+error.stack });
    }
});

app.get("/api/extras", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
