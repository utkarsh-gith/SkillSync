import React from 'react';

function Home() {
    return (
        <div>
            <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center">
                <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-4">Welcome to Skill Sync</h1>
                <p className="text-lg mb-4">Organize your tasks efficiently and stay on top of your goals.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-72 w-80 mx-auto transition transform hover:scale-105 hover:bg-purple-600 dark:hover:bg-purple-800 hover:shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-purple-700/50 hover:text-white dark:hover:text-white">
                        <h2 className="text-2xl font-semibold text-black dark:text-gray-100 mb-4">Manage Your Goals</h2>
                        <p className="mb-4 text-gray-800 dark:text-gray-100 hover:text-white">Add new tasks, set start and end dates, and mark them as completed when done. Keep track of your progress with ease.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-72 w-80 mx-auto transition transform hover:scale-105 hover:bg-blue-600 dark:hover:bg-blue-800 hover:shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-blue-700/50 hover:text-white dark:hover:text-white">
                        <h2 className="text-2xl font-semibold text-black dark:text-gray-100 mb-4">Explore Courses</h2>
                        <p className="mb-4 text-gray-800 dark:text-gray-100 hover:text-white">Check out our recommended courses to enhance your skills and knowledge. Expand your horizons with new learning opportunities.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-72 w-80 mx-auto transition transform hover:scale-105 hover:bg-red-600 dark:hover:bg-red-800 hover:shadow-2xl hover:shadow-red-500/50 dark:hover:shadow-red-700/50 hover:text-white dark:hover:text-white">
                        <h2 className="text-2xl font-semibold text-black dark:text-gray-100 mb-4">Stay on Top of Your Goals</h2>
                        <p className="mb-4 text-gray-800 dark:text-gray-100 hover:text-white">Utilize the to-do list to effectively manage your goals. Set clear objectives, track your deadlines, and maintain a balanced workload.</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex justify-center items-center">
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
