import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const taskStyles = [
  { bgColor: '#f87171', label: 'New Task', key: 'newTask' },      
  { bgColor: '#60a5fa', label: 'Completed Task', key: 'completed' }, 
  { bgColor: '#4ade80', label: 'Accepted Task', key: 'active' },    
  { bgColor: '#facc15', label: 'Failed Task', key: 'failed' },       
];

const TaskListNumbers = ({ data }) => {
  const summary = data?.taskSummary || {};

  return (
    <Grid container spacing={2} sx={{ mt: 5, justifyContent: 'space-between' }}>
      {taskStyles.map((task, index) => (
        <Grid item xs={12} sm={5.8} md={2.8} key={index}>
          <Box
            sx={{
              backgroundColor: task.bgColor,
              borderRadius: 3,
              px: 4,
              py: 3,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              {summary[task.key] ?? 0}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {task.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskListNumbers;

