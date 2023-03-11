import React from 'react';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export function Header() {
  return (
    <Grid container alignItems="center">
      <Typography fontWeight={600} variant="h6">
        Board
      </Typography>
      <IconButton
        aria-label="delete"
        color="primary"
        sx={{
          borderRadius: 2,
          backgroundColor: '#c5ffe3',
          ml: 3,
        }}
      >
        <StarBorderIcon />{' '}
      </IconButton>
      <Divider
        orientation="vertical"
        sx={{
          height: 30,
          ml: 2,
        }}
      />
      <Button
        startIcon={<RemoveRedEyeIcon />}
        variant="contained"
        sx={{
          ml: 2,
          ':hover': {
            boxShadow: 'none',
          },
        }}
      >
        Visibility
      </Button>
      <IconButton
        aria-label="delete"
        color="primary"
        sx={{
          borderRadius: 2,
          backgroundColor: '#c5ffe3',
          ml: 'auto',
        }}
      >
        <MoreHorizIcon />{' '}
      </IconButton>
    </Grid>
  );
}
