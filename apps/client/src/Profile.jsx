import './Profile.css';
import React from 'react';
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "./Navbar.jsx";

const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Mock Data for now (Replace with API call later)
        const mockProfile = {
            name: "John Doe",
            email: "john.doe@example.com",
            entryCount: 11,
            streak: 7,
            entryTrends: [
                { date: "2025-01-26", wordCount: 100 },
                { date: "2025-01-27", wordCount: 90 },
                { date: "2025-01-28", wordCount: 50 },
                { date: "2025-01-29", wordCount: 0 },
                { date: "2025-01-30", wordCount: 250 },
                { date: "2025-01-31", wordCount: 220 },
                { date: "2025-02-01", wordCount: 200 },
                { date: "2025-02-02", wordCount: 180 },
                { date: "2025-02-03", wordCount: 220 },
                { date: "2025-02-04", wordCount: 150 },
                { date: "2025-02-05", wordCount: 300 },
            ],
        };

        setTimeout(() => {
            setProfileData(mockProfile);
            setLoading(false);
        }, 1000); // Simulating API delay
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <>
    <Navbar />
    <div className="profile">
        <h2>Welcome, {profileData.name}!</h2>
        <p><b>Email:</b> {profileData.email}</p>
        <p><b>Total Entries:</b> {profileData.entryCount}</p>
        <p><b>Journaling Streak:</b> {profileData.streak} days</p>

        <h3>Journal Entries Trend</h3>
        
        {/* Fixed container for the graph */}
        <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={profileData.entryTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="wordCount" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
</>
    );
};

export default Profile;
