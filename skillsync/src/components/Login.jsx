import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/login", { username, password });
            if (response.status === 200) {
                onLoginSuccess(); // Navigate to Home page after successful login
            }
        } catch (err) {
            setError(err.response?.data?.message || "Login failed!");
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;