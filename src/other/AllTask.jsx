import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
const tasks = [
  { name: 'Sarthak', title: 'Make a UI Design', status: 'Status', color: '#f87171' },  // red-400
  { name: 'Sarthak', title: 'Make a UI Design', status: 'Status', color: '#4ade80' },  // green-400
  { name: 'Sarthak', title: 'Make a UI Design', status: 'Status', color: '#facc15' },  // yellow-400
  { name: 'Sarthak', title: 'Make a UI Design', status: 'Status', color: '#60a5fa' },  // blue-400
  { name: 'Sarthak', title: 'Make a UI Design', status: 'Status', color: '#c084fc' },  // purple-400
];

const AllTask = () => {
  return (
    <Box sx={{ backgroundColor: '#1c1c1c', p: 2, borderRadius: 2, mt: 3 }}>
      {tasks.map((task, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            backgroundColor: task.color,
            p: 2,
            mb: 2,
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: 2,
          }}
        >
          <Box>
            <Typography variant="h6">{task.name}</Typography>
            <Typography variant="subtitle1">{task.title}</Typography>
            <Typography variant="body2">{task.status}</Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default AllTask;

