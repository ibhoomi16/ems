import React, { useContext } from 'react';
import { Box, Typography, Paper, Grid, Chip, Divider } from '@mui/material';
import { AuthContext } from '../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);
  const employees = authData?.employees || [];

  return (
    <Box sx={{ backgroundColor: '#0f172a', p: 4, borderRadius: 2, mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" color="white" mb={3}>
        Task Summary Dashboard
      </Typography>

      {/* Header Row */}
      <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: '#1e293b', borderRadius: 2 }}>
        <Grid container spacing={2} alignItems="center">
          {['Employee Name', 'New', 'Active', 'Completed', 'Failed'].map((label, i) => (
            <Grid item xs={2} key={i}>
              <Typography
                align="center"
                fontWeight="bold"
                sx={{ color: '#cbd5e1', textTransform: 'uppercase', fontSize: 13 }}
              >
                {label}
              </Typography>
          </Grid>
          ))}
        </Grid>
      </Paper>

      <Divider sx={{ mb: 2, borderColor: '#334155' }} />

      {/* Employee Rows */}
      {employees.map((emp, index) => {
        const tasks = emp.tasks || [];
        const counts = {
          new: tasks.filter(task => task.newTask).length,
          active: tasks.filter(task => task.active).length,
          complete: tasks.filter(task => task.completed).length,
          failed: tasks.filter(task => task.failed).length,
        };

        return (
          <Paper
            key={index}
            elevation={2}
            sx={{
              p: 2,
              mb: 2,
              backgroundColor: '#1e293b',
              borderRadius: 2,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.01)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              },
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <Typography align="center" fontWeight={600} color="#f1f5f9">
                  {emp.firstName}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Chip
                  label={counts.new}
                  sx={{ bgcolor: '#3b82f6', color: 'white', px: 2, fontWeight: 600 }}
                />
              </Grid>
              <Grid item xs={2}>
                <Chip
                  label={counts.active}
                  sx={{ bgcolor: '#facc15', color: 'black', px: 2, fontWeight: 600 }}
                />
              </Grid>
              <Grid item xs={2}>
                <Chip
                  label={counts.complete}
                  sx={{ bgcolor: '#22c55e', color: 'white', px: 2, fontWeight: 600 }}
                />
              </Grid>
              <Grid item xs={2}>
                <Chip
                  label={counts.failed}
                  sx={{ bgcolor: '#ef4444', color: 'white', px: 2, fontWeight: 600 }}
                />
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default AllTask;
