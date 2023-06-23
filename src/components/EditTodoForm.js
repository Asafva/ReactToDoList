import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            editTodo(value, task.id);
            setValue("");
        }
    };
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" onChange={(e) => setValue(e.target.value)} value={value} placeholder={value} />
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    )
}