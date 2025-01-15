import React, { useState } from 'react';
import './TaskContainer.css'

const TaskContainer = ({ setShowTaskForm, onTaskSubmit }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    type: '',
    isImportant: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(task);
    setTask({ title: '', description: '', type: '', isImportant: false });
  };

  return (
    <div className="task-form">
      <h2>Add Task</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleInputChange}
          placeholder="Task Title"
          required
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleInputChange}
          placeholder="Task Description"
          required
        />
        <div>
          <label>
            <input
              type="checkbox"
              name="isImportant"
              checked={task.isImportant}
              onChange={handleInputChange}
            />
            Important
          </label>
        </div>
        <div>
          <select name="type" value={task.type} onChange={handleInputChange}>
            <option value="">Select Task Type</option>
            <option value="Planned">Planned</option>
            <option value="Important">Important</option>
          </select>
        </div>
        <button type="submit">Save Task</button>
      </form>
      <button onClick={() => setShowTaskForm(false)}>Cancel</button>
    </div>
  );
};

export default TaskContainer;
