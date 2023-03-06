import { Grid, Typography } from '@mui/material';
import React from 'react';
import { BoardCard } from '../BoardCard/BoardCard';

export function BoardsList() {
  return (
    <Grid container paddingLeft={16} mt={3}>
      <Grid item xs={12}>
        <Typography variant="h6" fontWeight={600}>
          Boards
        </Typography>

        <Grid container gap={4} mt={4}>
          <Grid
            width="280px"
            container
            alignItems="center"
            justifyContent="center"
            bgcolor="#d7f7e7"
            borderRadius="2px"
            sx={{
              ':hover': {
                backgroundColor: '#ceeadc',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              },
            }}
          >
            Create new board
          </Grid>
          <BoardCard title="Board" />
          <BoardCard title="Board 1" />
          <BoardCard title="Board 2" />
        </Grid>
      </Grid>
    </Grid>
  );
}
