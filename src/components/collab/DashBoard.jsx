import React, { useState } from 'react';
import GoalForm from './GoalForm';
import ProgressChart from './ProgressChart';
import Leaderboard from './Leaderboard';

function Dashboard() {
    const [goals, setGoals] = useState([]);
    const [progressData, setProgressData] = useState({ labels: [], values: [] });
    const [progress, setProgress] = useState([]);

    const addGoal = (goal) => {
        setGoals([...goals, goal]);
        // Initialize progress for each person
        const initialProgress = goal.names.map(name => ({ name, progress: 0 }));
        setProgress(initialProgress);
        // Update progress data (this is just a placeholder, you can customize it)
        setProgressData({
            labels: [...progressData.labels, `Goal ${goals.length + 1}`],
            values: [...progressData.values, Math.floor(Math.random() * 100)],
        });
    };

    const updateProgress = (name, achieved) => {
        setProgress(prevProgress =>
            prevProgress.map(person =>
                person.name === name ? { ...person, progress: person.progress + (achieved ? 1 : 0) } : person
            )
        );
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Goal Dashboard</h1>
            <GoalForm addGoal={addGoal} />
            <ProgressChart data={progressData} />
            <Leaderboard progress={progress} />
            <div className="mt-4">
                <h2 className="text-2xl font-bold mb-2">Update Progress</h2>
                {progress.map((person, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                        <span>{person.name}</span>
                        <button
                            onClick={() => updateProgress(person.name, true)}
                            className="rounded-lg px-3 py-1 bg-green-600 text-white"
                        >
                            Achieved
                        </button>
                        <button
                            onClick={() => updateProgress(person.name, false)}
                            className="rounded-lg px-3 py-1 bg-red-600 text-white"
                        >
                            Not Achieved
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;