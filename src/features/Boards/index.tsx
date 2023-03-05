import React from 'react';
import Divider from '@mui/material/Divider';
import { BoardHeader } from './Components/BoardHeader/BoardHeader';

export function Boards() {
  return (
    <>
      <BoardHeader />
      <Divider
        sx={{
          width: '80%',
          margin: 'auto',
        }}
      />
    </>
  );
}
