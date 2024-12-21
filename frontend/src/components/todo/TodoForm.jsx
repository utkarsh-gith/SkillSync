import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo || !startDate || !endDate) return;

        addTodo({ todo, startDate, endDate, completed: false });
        setTodo("");
        setStartDate("");
        setEndDate("");
    };

    const today = new Date().toISOString().split("T")[0];
    return (
        <form onSubmit={add} className="flex flex-col space-y-2">
            <input
                type="text"
                placeholder="Write goal..."
                className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <div className="flex space-x-2">
                <div className="flex flex-col w-full">
                    <label className="text-sm text-white-700"><b>Start Date</b></label>
                    <input
                        type="date"
                        className="border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        value={startDate}
                        min={today}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-white-700"><b>End Date</b></label>
                    <input
                        type="date"
                        className="border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        value={endDate}
                        min={startDate || today}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>
            <button type="submit" className="rounded-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
