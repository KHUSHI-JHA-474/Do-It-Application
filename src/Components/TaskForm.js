// src/Components/TaskForm.js
import React from 'react';
import './TaskForm.css'

const TaskForm = ({ newTask, setNewTask, setIsImportant, isImportant }) => {
  return (
    <div className="task-form">
      <h2>Create a New Task</h2> {/* Title inside the form box */}
      <input
        type="text"
        placeholder="Enter task name"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={isImportant}
            onChange={() => setIsImportant(!isImportant)}
          />
          Mark as Important
        </label>
      </div>
      <button onClick={setNewTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
