import React from "react";

// Task component represents a single task with a title, description, and completion status
function Task({ task, onToggle, onDelete }) {
    return (
        <div className="Todo">

            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="checkbox-input"
            />
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <button className="dlt-btn" onClick={() => onDelete(task.id)}>Delete</button>

        </div>
    )
}


export default Task;
