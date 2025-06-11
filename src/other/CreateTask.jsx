import React, { useState, useEffect } from 'react';
import { Paper, Box, Typography, TextField, Button } from "@mui/material";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: true,
      completed: false,
    };

    // Step 1: Get employees
    let employees = JSON.parse(localStorage.getItem('employees')) || [];

    // Step 2: Update task list for matching employee
    const updatedEmployees = employees.map((emp) => {
      if (emp.firstName.toLowerCase() === assignTo.toLowerCase()) {
        const updatedTasks = emp.tasks ? [...emp.tasks, newTask] : [newTask];
        return { ...emp, tasks: updatedTasks };
      }
      return emp;
    });

    // Step 3: Save back to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Step 4: Update loggedInUser if affected
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const matchedUser = updatedEmployees.find(
      emp => emp.firstName.toLowerCase() === assignTo.toLowerCase()
    );

    if (
      loggedInUser?.data?.firstName.toLowerCase() === assignTo.toLowerCase()
    ) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...loggedInUser, data: matchedUser })
      );
    }

    // Step 5: Set task for debug, reset form
    setTask(newTask);
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  useEffect(() => {
    if (task.title) {
      console.log("✅ Task Created:", task);
    }
  }, [task]);

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        mt: 4,
        maxWidth: 1000,
        mx: 'auto',
        bgcolor: '#1e1e1e',
        color: 'white',
        borderRadius: 2,
      }}
    >
      <form onSubmit={submitHandler}>
        <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">Task Title</Typography>
            <TextField
              fullWidth
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              sx={{ mt: 1, input: { color: 'white' } }}
            />

            <Typography variant="h6" sx={{ mt: 3 }}>
              Date
            </Typography>
            <TextField
              fullWidth
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              sx={{ mt: 1, input: { color: 'white' } }}
            />

            <Typography variant="h6" sx={{ mt: 3 }}>
              Assign To
            </Typography>
            <TextField
              fullWidth
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              sx={{ mt: 1, input: { color: 'white' } }}
            />

            <Typography variant="h6" sx={{ mt: 3 }}>
              Category
            </Typography>
            <TextField
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{ mt: 1, input: { color: 'white' } }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">Description</Typography>
            <TextField
              fullWidth
              multiline
              rows={10}
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              sx={{ mt: 1, textarea: { color: 'white' } }}
            />

            <Box sx={{ mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: '#4CAF50',
                  color: 'white',
                  px: 4,
                  py: 1,
                  '&:hover': { bgcolor: '#45A049' },
                }}
              >
                Create Task
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Paper>
  );
};

export default CreateTask;
