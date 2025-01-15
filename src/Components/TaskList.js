import React from 'react';
import './TaskList.css'; // Ensure the correct path

const TaskList = ({ tasks, toggleTaskStatus, toggleTaskImportance, removeTask }) => {
  console.log(removeTask); // This should log a function. If it logs `undefined`, then it's not being passed properly.

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks to display.</p>
      ) : (
        tasks.map((task) => (
          <div className="task-item" key={task.id}>
            <span>
              <strong>{task.name}</strong>
              {task.important && <span className="important"> (Important)</span>}
            </span>
            <div className="task-actions">
              <button onClick={() => toggleTaskStatus(task.id)}>
                {task.status === 'planned' ? 'Mark Completed' : 'Mark Planned'}
              </button>
              <button onClick={() => toggleTaskImportance(task.id)}>
                {task.important ? 'Unmark Important' : 'Mark Important'}
              </button>
              <button onClick={() => removeTask(task.id)} className="remove-task-button">
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
