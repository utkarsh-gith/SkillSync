import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate(); // Hook for navigation

    const toggleMode = () => setIsLogin(!isLogin);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Example of logic for login or signup
        if (isLogin) {
            console.log("Login process here");
        } else {
            console.log("Signup process here");
        }
        // Navigate to Home after login or signup
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? "Login" : "Signup"}
                </h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 border rounded-lg"
                                required={!isLogin} // Require name only for signup
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
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
