import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios for HTTP requests

export default function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setError('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const endpoint = isLogin ? 'http://localhost:3000/users/login' : 'http://localhost:3000/users/signup';
            const data = isLogin
                ? { username: formData.username, password: formData.password }
                : { username: formData.username, email: formData.email, password: formData.password };
            console.log(`Submitting to ${endpoint} with data:`, data); // Debugging log

            // Send form data to the backend
            const response = await axios.post(endpoint, data);
            console.log(response.data);

            // Navigate to Home after login or signup
            navigate('/');
        } catch (err) {
            console.log('Error during form submission:', err); // Debugging log
            setError(err.response ? err.response.data.error : 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? "Login" : "Signup"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required={!isLogin}  // Required only for signup
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        {isLogin ? "Login" : "Signup"}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={toggleMode}
                        className="text-blue-500 hover:underline font-bold"
                    >
                        {isLogin ? "Signup" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
}
