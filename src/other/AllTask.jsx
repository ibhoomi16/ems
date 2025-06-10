import React, { useContext } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { AuthContext } from '../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);
  const employees = authData?.employees || [];

  return (
    <Box sx={{ backgroundColor: '#1c1c1c', p: 3, borderRadius: 2, mt: 4 }}>
      {/* Header Row */}
      <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: '#f87171' }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography align="center" fontWeight="bold" color="white">Employee Name</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align="center" fontWeight="bold" color="white">New Task</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align="center" fontWeight="bold" color="white">Active Task</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align="center" fontWeight="bold" color="white">Completed</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align="center" fontWeight="bold" color="white">Failed</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Employee Rows */}
      {employees.map((emp, index) => {
        const tasks = emp.tasks || [];
        const counts = {
          new: tasks.filter(task => task.status === 'new').length,
          accepted: tasks.filter(task => task.status === 'accepted').length,
          complete: tasks.filter(task => task.status === 'complete').length,
          failed: tasks.filter(task => task.status === 'failed').length,
        };

        return (
          <Paper key={index} elevation={2} sx={{ p: 2, mb: 2, backgroundColor: '#e57373' }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography align="center" color="white">{emp.firstName}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center" color="white">{counts.new}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center" color="white">{counts.accepted}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center" color="white">{counts.complete}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center" color="white">{counts.failed}</Typography>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default AllTask;
