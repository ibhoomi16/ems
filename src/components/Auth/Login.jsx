import React, { useState } from 'react';
import { Box, Button, TextField, Paper } from '@mui/material';

const Login = ({handleLogin}) => {
  console.log(handleLogin)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("");
  };

  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={5}
        sx={{
          border: '1px solid #00c896',
          padding: 4,
          bgcolor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 300,
        }}
      >
        <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField
            type="email"
            label="Enter your email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: '50px',
                input: { color: 'white' },
              },
            }}
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#00c896',
                },
                '&:hover fieldset': {
                  borderColor: '#00e6a3',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#00e6a3',
                },
              },
            }}
          />
          <TextField
  type="password"
  label="Enter password"
  variant="outlined"
  fullWidth
  value={password}
  onChange={(e) => setPassword(e.target.value)} // ✅ This is correct usage
  InputProps={{
    sx: {
      borderRadius: '50px',
      input: { color: 'white' },
    },
  }}
  InputLabelProps={{ style: { color: 'white' } }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#00c896',
      },
      '&:hover fieldset': {
        borderColor: '#00e6a3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#00e6a3',
      },
    },
  }}
/>

          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: '#00c896',
              color: 'white',
              borderRadius: '50px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#00e6a3',
              },
            }}
          >
            Log in
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
