import React, { useState } from 'react';

function GoalForm({ addGoal }) {
    const [names, setNames] = useState([""]);
    const [goal, setGoal] = useState("");
    const [goalType, setGoalType] = useState("weekly");

    const handleNameChange = (index, value) => {
        const newNames = [...names];
        newNames[index] = value;
        setNames(newNames);
    };

    const addNameField = () => {
        setNames([...names, ""]);
    };

    const handleDeleteName = (index) => {
        const newNames = names.filter((_, idx) => idx !== index);
        setNames(newNames);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addGoal({ names, goal, goalType });
        setNames([""]);
        setGoal("");
        setGoalType("weekly");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            {names.map((name, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder={`Name ${index + 1}`}
                        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        value={name}
                        onChange={(e) => handleNameChange(index, e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => handleDeleteName(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    >
                        Delete
                    </button>
                </div>
            ))}
            <button type="button" onClick={addNameField} className="rounded-lg px-3 py-1 bg-blue-600 text-white">
                Add Name
            </button>
            <input
                type="text"
                placeholder="Goal"
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
            />
            <select
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={goalType}
                onChange={(e) => setGoalType(e.target.value)}
            >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>
            <button type="submit" className="rounded-lg px-3 py-1 bg-green-600 text-white">
                Set Goal
            </button>
        </form>
    );
}

export default GoalForm;
