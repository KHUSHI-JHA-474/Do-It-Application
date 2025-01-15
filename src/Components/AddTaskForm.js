import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    type: "Planned", // Default to "Planned"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDetails.title.trim() === "" || taskDetails.description.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    onAddTask(taskDetails);
    setTaskDetails({ title: "", description: "", type: "Planned" }); // Reset form
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <div className="form-group">
        <label htmlFor="title">Task Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={taskDetails.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={taskDetails.description}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="type">Task Type</label>
        <select
          id="type"
          name="type"
          value={taskDetails.type}
          onChange={handleInputChange}
          required
        >
          <option value="Planned">Planned</option>
          <option value="Important">Important</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
