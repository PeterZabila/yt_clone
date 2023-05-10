import React, { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Sidebar } from './';

const Feed = () => {
  return (
    <Stack
      sx={{
        flexDirection: { sx: 'column', md: 'row' }
      }}
    >
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar/>

        <Typography className='copyright' variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright PZ 2023
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold" mb={2}
          sx={{ color: 'white' }}
        >
          <span style={{ marginRight: '5px' }}>New</span>
          <span
            style={{ color: '#F31503', fontSize: '26px' }}
          >videos</span>
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed
