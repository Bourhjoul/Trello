import { Grid, Typography, IconButton } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TodoCard } from './TodoCard';

export function Card() {
  return (
    <Grid
      item
      container
      bgcolor="#f2f7f4"
      m={2}
      boxShadow="0px 10px 10px -3px rgba(0,0,0,0.1)"
      minHeight="100px"
      width="300px"
      alignItems="flex-start"
      borderRadius="6px"
      p={1.5}
    >
      <Typography variant="subtitle2" fontWeight="600">
        Todo
      </Typography>
      <IconButton
        sx={{
          borderRadius: 2,
          ml: 'auto',
          fontSize: '10px',
        }}
      >
        <MoreHorizIcon />{' '}
      </IconButton>
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </Grid>
  );
}
