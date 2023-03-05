import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import avatar from '@/assets/Avatar.png';
import { Outlet } from 'react-router-dom';

const pages = ['WorkSpaces', 'Boards'];

export function MainLayout() {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar variant="dense" disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Trello
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 5, mx: 1, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outlined"
                sx={{
                  my: 5,
                  bgcolor: '#006e82',
                  color: 'white',
                  display: 'block',
                  ':hover': {
                    color: 'white',
                    bgcolor: '#0093ad',
                  },
                }}
              >
                Create
              </Button>
              <Box
                sx={{
                  my: 5,
                  color: 'white',
                  display: 'block',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  ':hover': {
                    padding: 0.2,
                  },
                }}
                component="img"
                borderRadius="50%"
                height="35px"
                marginLeft="auto"
                border="1px solid white"
                src={avatar}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
