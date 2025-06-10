import React from 'react';
import { Box, Typography, Chip, Button } from '@mui/material';

const AcceptTask = ({ task }) => {
  return (
 <Box
  sx={{
    flexShrink: 0,
    width: 300,
    height: 250,
    p: 2.5,
    bgcolor: task.failed
      ? '#f87171'
      : task.completed
      ? '#60a5fa'
      : task.active
      ? '#4ade80'
      : '#facc15',
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}
>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Chip
          label={
            task.failed
              ? 'Failed'
              : task.completed
              ? 'Completed'
              : task.active
              ? 'Active'
              : 'New'
          }
          size="small"
          sx={{
            bgcolor: task.failed
              ? 'red'
              : task.completed
              ? 'blue'
              : task.active
              ? 'green'
              : 'gray',
            color: '#fff',
            fontSize: '0.75rem',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
          }}
        />
        <Typography variant="body2">{task.date}</Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {task.title}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {task.description}
        </Typography>
      </Box>

      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
        <Button variant="contained" color="success" size="small">
          Mark as Completed
        </Button>
        <Button variant="contained" color="error" size="small">
          Mark as Failed
        </Button>
      </Box>
    </Box>
  );
};

export default AcceptTask;