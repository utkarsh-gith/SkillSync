import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const [startDate, setStartDate] = useState(todo.startDate);
    const [endDate, setEndDate] = useState(todo.endDate);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        const today = new Date().toISOString().split("T")[0];
        if (startDate < today) {
            alert("Start date cannot be in the past. Choose the current date or a future date.");
            return;
        }
        if (endDate <= startDate) {
            alert("End date must be after start date. Please ensure that the end date is later than the start date.");
            return;
        }
        updateTodo(todo.id, { ...todo, todo: todoMsg, startDate, endDate });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`flex flex-col border border-black/10 rounded-lg px-3 py-1.5 gap-y-2 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
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
                    <label className="text-sm text-gray-700">Start Date</label>
                    <input
                        type="date"
                        className={`border outline-none w-full bg-transparent rounded-lg ${
                            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                        }`}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        readOnly={!isTodoEditable}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-gray-700">End Date</label>
                    <input
                        type="date"
                        className={`border outline-none w-full bg-transparent rounded-lg ${
                            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                        }`}
                        value={endDate}
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
