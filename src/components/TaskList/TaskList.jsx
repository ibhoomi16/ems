import { Box } from '@mui/material';
import AcceptTask from './AcceptTask'; // Import the component
import React from 'react';
const TaskList = ({ task }) => {
  return (
    <Box
      id="tasklist"
      sx={{
        overflowX: 'auto',
        display: 'flex',
        gap: 2,
        width: '100%',
        py: 2.5,
        mt: 5,
        px: 2,
      }}
    >
      {task?.map((item, index) => (
        <AcceptTask key={index} task={item} />
      ))}
    </Box>
  );
};

export default TaskList;
