import React from 'react';
import { Box, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Header } from './Components/Header';
import { Card } from './Components/Card';

export function Board() {
  return (
    <Box padding={5} height="90%">
      <Header />
      <Grid
        container
        gap={2}
        width="100%"
        flexWrap="nowrap"
        mt={2}
        sx={{ overflowX: 'auto' }}
        height="100%"
      >
        <Card title="todo" />
        <Card title="doing" />
        <Card title="done" />
        <Card title="done" />

        <Grid
          container
          item
          minWidth="300px"
          height="fit-content"
          p={2}
          bgcolor="rgba(242,247,244,0.35)"
          boxShadow="0px 10px 8px -3px rgba(0,0,0,0.1)"
          sx={{
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: 'rgba(242,247,244,0.9)',
            },
          }}
        >
          <AddIcon
            sx={{
              mr: '8px',
            }}
          />
          Add new list
        </Grid>
      </Grid>
    </Box>
  );
}
