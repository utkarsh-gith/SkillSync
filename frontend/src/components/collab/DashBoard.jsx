import React, { useState } from 'react';
import GoalForm from './GoalForm';
import Leaderboard from './Leaderboard';
import Calendar from './Calendar';

function Dashboard() {
    const [goals, setGoals] = useState([]);
    const [progress, setProgress] = useState([]);

    const addGoal = (goal) => {
        setGoals([...goals, goal]);
        
        const initialProgress = goal.names.map(name => ({ name, progress: 0 }));
        setProgress([...progress, ...initialProgress]);
    };

    const updateProgress = (name, progressCount) => {
        setProgress(prevProgress =>
            prevProgress.map(person =>
                person.name === name ? { ...person, progress: progressCount } : person
            )
        );
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Goal Dashboard</h1>
            <GoalForm addGoal={addGoal} />
            <Leaderboard progress={progress} />
            <div className="mt-4">
                <h2 className="text-2xl font-bold mb-2">Update Progress</h2>
                {goals.map((goal, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-bold mb-2">{goal.name}</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {goal.names.map((name, idx) => (
                                <div key={idx} className="mb-2">
                                    <h4 className="text-lg font-bold">{name}</h4>
                                    <Calendar name={name} updateProgress={updateProgress} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;