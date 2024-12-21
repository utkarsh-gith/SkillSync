import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const [deadline, setDeadline] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo || !deadline) return;

        addTodo({ todo, deadline, completed: false });
        setTodo("");
        setDeadline("");
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write goal..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <input
                type="date"
                placeholder="Deadline"
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
