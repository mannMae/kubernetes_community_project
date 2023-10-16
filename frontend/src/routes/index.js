import { Navigate, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Home } from 'features/misc';

import { firebaseAuth } from 'libraries/firebase';
import { useEffect, useState } from 'react';
import { MainLayout } from 'components/Layout';

export const AppRoutes = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setInit(true);
    });
  }, []);

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

  const routes = firebaseAuth.currentUser ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);
  return (
    <>
      <MainLayout>{init && element}</MainLayout>
    </>
  );
};
