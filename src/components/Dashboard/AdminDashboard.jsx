import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import CreateTask from '../../other/CreateTask';
import Header from '../../other/Header';
import AllTask from '../../other/AllTask';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Initial load of employees
    const stored = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(stored);
  }, []);

  const handleCreateTask = (newTask) => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.firstName.toLowerCase() === newTask.assignTo.toLowerCase()) {
        return {
          ...emp,
          tasks: [...(emp.tasks || []), newTask],
          taskSummary: {
            ...emp.taskSummary,
            newTask: (emp.taskSummary?.newTask || 0) + 1,
          },
        };
      }
      return emp;
    });

    // Persist and update state
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
  };

  return (
    <Box sx={{ bgcolor: '#121212', minHeight: '100vh', p: 4 }}>
      <Header />
      <CreateTask onCreateTask={handleCreateTask} />
      <AllTask employees={employees} />
    </Box>
  );
};

export default AdminDashboard;
