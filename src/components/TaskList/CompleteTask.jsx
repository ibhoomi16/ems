import React from 'react';
import { Box, Typography, Chip, Button } from '@mui/material';

const CompleteTask = ({ task }) => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: 300,
        height: 250,
        p: 2.5,
        bgcolor: '#60a5fa', // blue bg for completed
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Chip
          label={task.priority || 'Normal'}
          size="small"
          sx={{
            bgcolor: 'primary.main',
            color: '#fff',
            fontSize: '0.75rem',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
          }}
        />
        <Typography variant="body2">{task.date}</Typography>
      </Box>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>
        {task.title}
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        {task.description}
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Button fullWidth variant="contained" color="primary" disabled>
          Completed
        </Button>
      </Box>
    </Box>
  );
};

export default CompleteTask;
