import { Navigate, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Home } from 'features/misc';

import { firebaseAuth } from 'libraries/firebase';

export const AppRoutes = () => {
  const auth = firebaseAuth.currentUser ? true : false;

  const commonRoutes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <Navigate to="." />,
    },
  ];

  const routes = auth ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);
  return <>{element}</>;
};
