import { Box } from '@mui/material';
import CreateTask from "../../other/CreateTask";
import Header from '../../other/Header';
import React  from 'react';
import AllTask from '../../other/AllTask';
const AdminDashboard = () => {
  return (
    <Box sx={{ bgcolor: '#121212', minHeight: '100vh', p: 4 }}>
      <Header />
      <CreateTask />
      <AllTask />
    </Box>
  );
};

export default AdminDashboard;
