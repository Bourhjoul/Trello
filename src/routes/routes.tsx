import { MainLayout } from '@/Components/Layouts/MainLayout';
import { Boards } from '@/features/Boards';
import { RouteObject } from 'react-router-dom';
import React from 'react';
import { Board } from '@/features/Board';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Boards /> },
      {
        path: 'board/:id',
        element: <Board />,
      },
    ],
  },
];
