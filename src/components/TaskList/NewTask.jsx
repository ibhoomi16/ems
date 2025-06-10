import React from 'react';
import { Box, Typography, Chip, Button } from '@mui/material';

const NewTask = ({ title, date, description, priority = 'High', onAccept }) => {
  return (
    <Box
  sx={{
    flexShrink: 0,
    width: 300,
    height: 250,
    p: 2.5,
    bgcolor: '#4ade80',
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}
>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Chip
          label={priority}
          size="small"
          sx={{
            bgcolor: priority === 'High' ? 'error.main' : 'warning.main',
            color: '#fff',
            fontSize: '0.75rem',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
          }}
        />
        <Typography variant="body2">{date}</Typography>
      </Box>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>
        {title}
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        {description}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" onClick={onAccept}>
          Accept
        </Button>
      </Box>
    </Box>
  );
};

export default NewTask;
