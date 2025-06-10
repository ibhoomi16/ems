import React from 'react';
import { Box, Typography, Chip, Button } from '@mui/material';

const FailedTask = () => {
  return (
    <Box
  sx={{
    flexShrink: 0,
    width: 300,
    height: 250,
    p: 2.5,
    bgcolor: '#f87171',
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}
>


      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Chip
          label="High"
          size="small"
          sx={{
            bgcolor: 'error.main', // bg-red-600
            color: '#fff',
            fontSize: '0.75rem',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
          }}
        />
        <Typography variant="body2">20 Feb 2024</Typography>
      </Box>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: 600 }}>
        Make a YouTube video
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam libero quisquam.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Button fullWidth variant="contained" color="primary">
          Failed
        </Button>
      </Box>
    </Box>
  );
};

export default FailedTask;
