import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import CreateTask from '../../other/CreateTask';
import Header from '../../other/Header';
import AllTask from '../../other/AllTask';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);

  // Load employees from localStorage
  const fetchEmployees = () => {
    const stored = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(stored);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleCreateTask = (newTask) => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    const updatedEmployees = employees.map(emp => {
      if (emp.firstName.toLowerCase() === newTask.assignTo.toLowerCase()) {
        const updatedTasks = [...(emp.tasks || []), newTask];
        return {
          ...emp,
          tasks: updatedTasks,
          taskSummary: {
            newTask: updatedTasks.filter(t => t.newTask).length,
            active: updatedTasks.filter(t => t.active).length,
            completed: updatedTasks.filter(t => t.completed).length,
            failed: updatedTasks.filter(t => t.failed).length,
          }
        };
      }
      return emp;
    });

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const updatedEmp = updatedEmployees.find(emp =>
      emp.firstName.toLowerCase() === newTask.assignTo.toLowerCase()
    );

    if (
      loggedInUser?.role === 'employee' &&
      loggedInUser?.data?.firstName.toLowerCase() === newTask.assignTo.toLowerCase()
    ) {
      localStorage.setItem('loggedInUser', JSON.stringify({
        role: 'employee',
        data: updatedEmp
      }));
    }

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
