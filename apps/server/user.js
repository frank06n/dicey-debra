import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Updated User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    dob: { type: String, required: true },  // Store as YYYY-MM-DD format
    phone: { type: String, required: true },
    occupation: { type: String },
    bloodGroup: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const router = express.Router();

// User Registration Route (Updated)
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, dob, phone, occupation, bloodGroup } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            dob,
            phone,
            occupation,
            bloodGroup
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
        console.log('Backend registration error: ', error)
    }
});

// User Login Route (No Change)
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // Compare the password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to log in' });
        console.log('Backend login error: ', error)
    }
});

export default router;
