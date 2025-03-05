import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout';
import { ROUTES, ROUTESCONFIG } from '@/constants/routes';
import NotFoundPage from '@/pages/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        {ROUTESCONFIG.filter((route) => route.path !== ROUTES.NOT_FOUND).map(
          ({ path, element, index }) => (
            <Route key={path} path={path} element={element} index={index} />
          )
        )}
      </Route>

      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
