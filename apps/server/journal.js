// journal.js
import express from 'express';
import mongoose from 'mongoose';

// Journal Entry Schema
const journalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String,
    createdAt: { type: Date, default: Date.now }
});
const Journal = mongoose.model('Journal', journalSchema);

const router = express.Router();

// Create a journal entry
router.post('/create', async (req, res) => {
    try {
        const { userId, text } = req.body;

        // Create a new journal entry
        const newJournal = new Journal({ userId, text });
        await newJournal.save();

        res.status(201).json({ message: 'Journal entry created' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create journal entry' });
    }
});

// Get journal entries for a user
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        // Fetch journal entries for the given user
        const journals = await Journal.find({ userId });

        res.status(200).json(journals);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch journal entries' });
    }
});

export default router;
