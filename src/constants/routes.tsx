import React from 'react';

import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';

export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '*'
};

export const ROUTESCONFIG: {
  path: string;
  element: React.ReactNode;
  index?: boolean;
}[] = [
  { path: ROUTES.HOME, element: <HomePage />, index: true },
  { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> }
];
