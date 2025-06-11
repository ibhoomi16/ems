import React, { useState, useEffect } from 'react';
import { Paper, Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";

const CreateTask = ({ onCreateTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [successOpen, setSuccessOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeeExists = employees.some(
      emp => emp.firstName.toLowerCase() === assignTo.toLowerCase()
    );

    if (!employeeExists) {
      setError(`No employee found with the name "${assignTo}"`);
      return;
    }

    const taskObj = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Call parent handler
    onCreateTask?.(taskObj);
    setSuccessOpen(true);

    // Reset form fields
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    setError('');
  };

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
              required
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              sx={{ mt: 1, input: { color: 'white' } }}
            />

            <Typography variant="h6" sx={{ mt: 3 }}>Date</Typography>
            <TextField
              fullWidth
              type="date"
              required
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              sx={{ mt: 1, input: { color: 'white' } }}
            />

            <Typography variant="h6" sx={{ mt: 3 }}>Assign To</Typography>
            <TextField
              fullWidth
              required
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              sx={{ mt: 1, input: { color: 'white' } }}
            />

            <Typography variant="h6" sx={{ mt: 3 }}>Category</Typography>
            <TextField
              fullWidth
              required
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
              required
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

      {/* Error Message */}
      {error && (
        <Box sx={{ mt: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {/* Success Snackbar */}
      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Task successfully created!
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default CreateTask;
