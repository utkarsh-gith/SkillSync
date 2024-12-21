import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const [startDate, setStartDate] = useState(todo.startDate);
    const [endDate, setEndDate] = useState(todo.endDate);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg, startDate, endDate });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    const today = new Date().toISOString().split("T")[0]; // Format for date comparison

    // Function to determine deadline color based on how near the deadline is
    const getDeadlineColor = () => {
        const timeDiff = new Date(endDate) - new Date(today); // Difference in milliseconds
        const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
        const daysLeft = timeDiff / oneDay;

        if (daysLeft <= 7) {
            return 'bg-red-600'; // Deadline within 7 days (red)
        } else if (daysLeft <= 21) {
            return 'bg-yellow-500'; // Deadline within 21 days (yellow)
        } else {
            return 'bg-green-500'; // Deadline more than 21 days (green)
        }
    };

    return (
        <div
            className={`flex flex-col border border-black/10 rounded-lg px-3 py-1.5 gap-y-2 shadow-sm shadow-white/50 duration-300 text-black 
                ${getDeadlineColor()} ${todo.completed ? "text-[#E06522] bg-[#FFFFFF]" : "text-black"}`}
        >
            <div className="flex items-center gap-x-3">
                <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={todo.completed}
                    onChange={toggleCompleted}
                />
                <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg ${
                        isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                />
            </div>
            <div className="flex items-center gap-x-3">
                <div className="flex flex-col w-full">
                    <label className="text-black">Start Date</label>
                    <input
                        type="date"
                        className={`border outline-none w-full bg-transparent rounded-lg ${
                            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                        }`}
                        value={startDate}
                        min={today}
                        onChange={(e) => setStartDate(e.target.value)}
                        readOnly={!isTodoEditable}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-black">End Date</label>
                    <input
                        type="date"
                        className={`border outline-none w-full bg-transparent rounded-lg ${
                            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                        }`}
                        value={endDate}
                        min={startDate || today}
                        onChange={(e) => setEndDate(e.target.value)}
                        readOnly={!isTodoEditable}
                    />
                </div>
            </div>
            <div className="flex items-center gap-x-3">
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                    onClick={() => {
                        if (todo.completed) return;

                        if (isTodoEditable) {
                            editTodo();
                        } else setIsTodoEditable((prev) => !prev);
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? "📁" : "✏️"}
                </button>
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                    onClick={() => deleteTodo(todo.id)}
                >
                    ❌
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
