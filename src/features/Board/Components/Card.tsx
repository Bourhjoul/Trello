import { Grid, Typography, IconButton } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import { TodoCard } from './TodoCard';

interface CardProps {
  title: string;
}

export function Card({ title }: CardProps) {
  return (
    <Grid
      item
      container
      bgcolor="#f2f7f4"
      boxShadow="0px 10px 10px -3px rgba(0,0,0,0.1)"
      minWidth="300px"
      alignItems="flex-start"
      borderRadius="2px"
      height="fit-content"
      p={1.5}
    >
      <Typography variant="subtitle2" fontWeight="600">
        {title}
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
      <Grid
        container
        item
        height="fit-content"
        p={1}
        bgcolor="rgba(255,255,255,0.5)"
        boxShadow="0px 10px 8px -3px rgba(0,0,0,0.1)"
        sx={{
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          ':hover': {
            backgroundColor: 'rgba(255,255,255,0.9)',
          },
        }}
        fontSize="smaller"
        alignItems="center"
      >
        <AddIcon
          sx={{
            mr: '8px',
          }}
        />
        add new card
      </Grid>
    </Grid>
  );
}
