import React from 'react';

function Leaderboard({ progress }) {
    return (
        <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Leaderboard</h2>
            <ul className="list-disc pl-5">
                {progress.map((person, index) => (
                    <li key={index} className="mb-1">
                        {person.name}: {person.progress}%
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Leaderboard;

