import { MainLayout } from '@/Components/Layouts/MainLayout';
import { Boards } from '@/features/Boards';
import { RouteObject } from 'react-router-dom';
import React from 'react';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <Boards /> }],
  },
];
