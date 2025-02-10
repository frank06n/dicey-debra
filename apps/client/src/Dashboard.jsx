// src/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [journals, setJournals] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const userId = "someUserId";  // Replace with actual user ID

        const fetchJournals = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/journal/${userId}`);
                const data = await response.json();

                if (response.status === 200) {
                    setJournals(data);
                } else {
                    setError('Failed to load journals');
                }
            } catch (err) {
                setError('An error occurred while fetching journals');
            }
        };

        fetchJournals();
    }, []);

    return (
        <div>
            <h2>Your Dashboard</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {journals.map((journal) => (
                    <li key={journal._id}>{journal.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
