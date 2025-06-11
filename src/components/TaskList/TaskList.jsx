import React from 'react';
import { Box } from '@mui/material';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

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
      {task?.map((item, index) => {
        if (item?.active) {
          return <AcceptTask key={index} task={item} />;
        }
        if (item?.newTask) {
          return <NewTask key={index} task={item} />;
        }
        if (item?.completed) {
          return <CompleteTask key={index} task={item} />;
        }
        if (item?.failed) {
          return <FailedTask key={index} task={item} />;
        }
        return null; // fallback
      })}
    </Box>
  );
};

export default TaskList;
