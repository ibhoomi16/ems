import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import React from'react'
const Header = ({ data }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (data && data.firstName) {
      setName(data.firstName);
    } else {
      const userData = JSON.parse(localStorage.getItem("loggedInUser"));
      if (userData?.data?.firstName) {
        setName(userData.data.firstName);
      } else if (userData?.role === "admin") {
        setName("Admin");
      } else {
        setName("Guest");
      }
    }
  }, [data]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}
    >
      <Typography variant="h5" component="h1" sx={{ fontWeight: 500 }}>
        Hello <br />
        <Box component="span" sx={{ fontSize: '1.875rem', fontWeight: 600 }}>
          {name}
        </Box>
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#ef4444',
          color: '#fff',
          fontSize: '1.125rem',
          fontWeight: 500,
          px: 5,
          py: 2,
          borderRadius: 1,
          '&:hover': {
            backgroundColor: '#dc2626',
          },
        }}
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          window.location.href = "/";
        }}
      >
        Log out
      </Button>
    </Box>
  );
};

export default Header;
