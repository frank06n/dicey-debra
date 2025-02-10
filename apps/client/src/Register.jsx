//The Register React file// src/components/Register.js
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [occupation, setOccupation] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, dob, phone, email, password, occupation, bloodGroup }),
            });

            const data = await response.json();

            if (response.status === 201) {
                setMessage('Registration successful! Please login.');
                setError('');
            } else {
                setError(data.error || 'Registration failed');
                setMessage('');
            }
        } catch (err) {
            setError('An error occurred during registration');
            console.log(err);
        }
    };

    return (
        <div className="register">
            <h2>Register to EmPower!</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <form className="register-form" onSubmit={handleRegister}>
                <input
                    className="input-area"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className="input-area"
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />
                <input
                    className="input-area"
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    className="input-area"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="input-area"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    className="input-area"
                    type="text"
                    placeholder="Occupation"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    required
                />
                <select 
                    className="input-area" 
                    value={bloodGroup} 
                    onChange={(e) => setBloodGroup(e.target.value)} 
                    required
                >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>

                <button type="submit">Register</button>
            </form>

            <div className="change-to-login">
                <p>Already have an account?</p>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Register;
