import React, { useState } from 'react';
import { Box } from '@mui/material';
import CreateTask from "../../other/CreateTask";
import Header from '../../other/Header';
import AllTask from '../../other/AllTask';

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log("Task created:", newTask);
  };

  return (
    <Box sx={{ bgcolor: '#121212', minHeight: '100vh', p: 4 }}>
      <Header />
      <CreateTask onCreateTask={handleCreateTask} />
      <AllTask tasks={tasks} />
    </Box>
  );
};

export default AdminDashboard;
