import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();  // Initialize navigate function

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.status === 200) {
                alert("Login successful");
                setError('');
                navigate("/opening");  // Redirect to homepage (Change as needed)   
            } else {
                setError(data.error || 'Login failed');
                setMessage('');
            }
        } catch (err) {
            setError('An error occurred while logging in');
        }
    };

    return (
        <div className="user-login">
            <h2>Login to EmPower</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <form className="user-input" onSubmit={handleLogin}>
                <input
                    className="input-area"
                    id="input-email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="input-area"
                    id="input-password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>

            <div className="change-to-register">
                <p>Don't have an account?</p>
                <a href="/register">Register</a>
            </div>
        </div>
    );
};

export default Login;
