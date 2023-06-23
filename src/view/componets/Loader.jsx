import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function Loader() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Stack>
  );
}
