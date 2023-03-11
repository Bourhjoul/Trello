import React from 'react';
import { Box, Grid } from '@mui/material';
import { Header } from './Components/Header';
import { Card } from './Components/Card';

export function Board() {
  return (
    <Box padding={5}>
      <Header />
      <Grid container>
        <Card />
        <Card />
        <Card />
      </Grid>
    </Box>
  );
}
