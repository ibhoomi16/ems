import React from 'react'

import { Paper, Box, Typography, TextField, Button } from "@mui/material";

const CreateTask = () => {
  return (
          <Paper
        elevation={4}
        sx={{
          maxWidth: 1000,
          mx: 'auto',
          mt: 4,
          p: 4,
          bgcolor: '#1e1e1e',
          color: 'white',
          borderRadius: 2,
        }}
      >
        <form>
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            {/* Left column */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">Task Title</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Make a UI design"
                sx={{ mt: 1, input: { color: 'white' } }}
              />

              <Typography variant="h6" sx={{ mt: 3 }}>Date</Typography>
              <TextField
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={{ mt: 1, input: { color: 'white' } }}
              />

              <Typography variant="h6" sx={{ mt: 3 }}>Assign to</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="employee name"
                sx={{ mt: 1, input: { color: 'white' } }}
              />

              <Typography variant="h6" sx={{ mt: 3 }}>Category</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="design, dev, etc"
                sx={{ mt: 1, input: { color: 'white' } }}
              />
            </Box>

            {/* Right column */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">Description</Typography>
              <TextField
                fullWidth
                multiline
                rows={10}
                variant="outlined"
                placeholder="Enter description"
                sx={{ mt: 1, textarea: { color: 'white' } }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#4CAF50',
                    color: 'white',
                    px: 4,
                    py: 1,
                    '&:hover': {
                      bgcolor: '#45A049',
                    },
                  }}
                >
                  Create Task
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Paper>
  )
}

export default CreateTask
