import React, { useState } from 'react';
import { Paper, Box, Typography, TextField, Button } from '@mui/material';

const CreateTask = ({ onCreateTask }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    assignTo: '',
    category: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...form,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };

    onCreateTask(newTask); // Send task to parent
    setForm({ title: '', description: '', date: '', assignTo: '', category: '' }); // Reset
  };

  return (
    <Paper elevation={4} sx={{ maxWidth: 1000, mx: 'auto', mt: 4, p: 4, bgcolor: '#1e1e1e', color: 'white', borderRadius: 2 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">Task Title</Typography>
            <TextField
              fullWidth
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Make a UI design"
              sx={{ mt: 1, input: { color: 'white' } }}
            />

            <Typography variant="h6" sx={{ mt: 3 }}>
              Date
            </Typography>
            <TextField
              fullWidth
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              sx={{ mt: 1, input: { color: 'white' } }}
            />

            <Typography variant="h6" sx={{ mt: 3 }}>Assign to</Typography>
            <TextField
              fullWidth
              name="assignTo"
              value={form.assignTo}
              onChange={handleChange}
              placeholder="employee name"
              sx={{ mt: 1, input: { color: 'white' } }}
            />

            <Typography variant="h6" sx={{ mt: 3 }}>Category</Typography>
            <TextField
              fullWidth
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="design, dev, etc"
              sx={{ mt: 1, input: { color: 'white' } }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">Description</Typography>
            <TextField
              fullWidth
              multiline
              rows={10}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description"
              sx={{ mt: 1, textarea: { color: 'white' } }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
              <Button type="submit" variant="contained" sx={{ bgcolor: '#4CAF50', color: 'white', px: 4, py: 1, '&:hover': { bgcolor: '#45A049' } }}>
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
