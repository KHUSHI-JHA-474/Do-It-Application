// src/Components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onAddTask, onSignOut, onTaskTypeClick, selectedTaskType }) => {
  return (
    <div className="sidebar">
      <h1>Plan your work
      and
      work your plan with </h1>
      <h1><strong><p style={{ color: 'green' }}>DoIt</p></strong></h1>
      <h2>Task Manager</h2>
      <button onClick={onAddTask}>Add Task</button>
      <div className="task-buttons">
        {/* Button for filtering All Tasks */}
        <button
          onClick={() => onTaskTypeClick("all")}
          className={selectedTaskType === "all" ? "active" : ""}
        >
          All Tasks
        </button>

        {/* Button for filtering Planned Tasks */}
        <button
          onClick={() => onTaskTypeClick("planned")}
          className={selectedTaskType === "planned" ? "active" : ""}
        >
          Planned
        </button>

        {/* Button for filtering Important Tasks */}
        <button
          onClick={() => onTaskTypeClick("important")}
          className={selectedTaskType === "important" ? "active" : ""}
        >
          Important
        </button>

        {/* Button for filtering Completed Tasks */}
        <button
          onClick={() => onTaskTypeClick("completed")}
          className={selectedTaskType === "completed" ? "active" : ""}
        >
          Completed
        </button>
      </div>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
};

export default Sidebar;
