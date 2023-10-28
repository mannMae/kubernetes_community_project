import { Navigate, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Home } from 'features/misc';

import { firebaseAuth } from 'libraries/firebase';
import { useEffect, useState } from 'react';
import { MainLayout } from 'components/Layout';
import { useSelector } from 'react-redux';

export const AppRoutes = () => {
  const [init, setInit] = useState(false);
  const auth = useSelector(({ auth }) => auth);

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

  const routes = auth?.credential ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  if (element.props.match.pathname === '/auth') {
    return <>{init && element}</>;
  }
  return (
    <>
      <MainLayout>{init && element}</MainLayout>
    </>
  );
};
