import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './HomePage.css'; // Import the CSS for the HomePage

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming user is logged in

  const setNewTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="homepage">
      <Sidebar setIsLoggedIn={setIsLoggedIn} />
      
      <div className="main-content">
        <h1>Welcome to Your Task Manager</h1>
        
        <TaskForm setNewTask={setNewTask} />
        <TaskList tasks={tasks} removeTask={removeTask} />
      </div>
    </div>
  );
};

export default HomePage;
