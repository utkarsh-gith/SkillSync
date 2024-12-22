import React from 'react';

function Home() {
    return (
        <div>
            <div className="container mx-auto p-4 bg-gray-100 text-gray-800">
                <h1 className="text-4xl font-bold text-purple-600 mb-4">Welcome to Skill Sync</h1>
                <p className="text-lg mb-4">Organize your tasks efficiently and stay on top of your goals.</p>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">Manage Your Goals</h2>
                    <p className="mb-2">Add new tasks, set start and end dates, and mark them as completed when done. Keep track of your progress with ease.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Explore Courses</h2>
                    <p className="mb-2">Check out our recommended courses to enhance your skills and knowledge. Expand your horizons with new learning opportunities.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-semibold text-red-600 mb-2">Stay on Top of Your Goals</h2>
                    <p className="mb-2">Utilize the to-do list to effectively manage your goals. Set clear objectives, track your deadlines, and maintain a balanced workload.</p>
                </div>
            </div>
            <div className="container mx-auto p-4 bg-gray-100 text-gray-800 flex justify-center items-center">
                <img
                    src="/assets/Logo.jpeg"
                    className="h-32"
                    alt="Logo"
                />
            </div>
        </div>
    );
}

export default Home;
