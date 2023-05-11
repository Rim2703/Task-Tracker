import React, { useState } from "react";
import Task from "./Task";

// TaskList component displays a list of tasks
function TaskList() {
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [filter, setFilter] = useState("all")

    // Add a new task to the list
    function addTask(event) {
        event.preventDefault();
        if (!title) return;
        const newTask = { id: Date.now(), title, description, completed: false }
        console.log(newTask)
        setTasks([...tasks, newTask])
        setTitle("")
        setDescription("")
    }

    // Toggle the completion status of a task
    function toggleTask(id) {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
        setTasks(updatedTasks)
    }

    // Delete a task from the list
    function deleteTask(id) {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        setTasks(updatedTasks)
    }

    // Filter tasks based on their completion status
    const filteredTasks =
        filter === "completed"
            ? tasks.filter((task) => task.completed)
            : filter === "uncompleted"
                ? tasks.filter((task) => !task.completed)
                : tasks;

    return (
        <div className="TodoWrapper">
            <h1>Task Tracker !</h1>
            <form onSubmit={addTask} className="TodoForm">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <button type="submit" className='todo-btn'>Add Task</button>
            </form>

            <div className="displaytodos">
                <div className="buttons">
                    <button onClick={() => setFilter("all")}>All</button>
                    <button onClick={() => setFilter("completed")}>Completed</button>
                    <button onClick={() => setFilter("uncompleted")}>Uncompleted</button>
                </div>
            </div>

            {filteredTasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                />
            ))}
        </div>
    )
}

export default TaskList;