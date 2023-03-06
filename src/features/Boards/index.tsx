import React from 'react';
import Divider from '@mui/material/Divider';
import { BoardHeader } from './Components/BoardHeader/BoardHeader';
import { BoardsList } from './Components/BoardsList/Boardslist';

export function Boards() {
  return (
    <>
      <BoardHeader />
      <Divider
        sx={{
          width: '90%',
          margin: 'auto',
        }}
      />
      <BoardsList />
    </>
  );
}
