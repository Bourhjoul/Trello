import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import avatar from '@/assets/Avatar.png';
import LockIcon from '@mui/icons-material/Lock';

export function BoardHeader() {
  return (
    <Grid container alignItems="center" height="160px" paddingLeft="25%">
      <Grid item xs>
        <Grid container spacing={2}>
          <Box component="img" src={avatar} height="80px" borderRadius="30%" />
          <Grid item>
            <Typography variant="h5" fontWeight={600}>
              Your workspace
            </Typography>
            <Grid container alignItems="center">
              <LockIcon
                sx={{
                  fontSize: '0.875rem',
                  mr: '5px',
                }}
              />
              <Typography variant="body2">Private</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
