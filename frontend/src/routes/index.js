import { Navigate, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Home } from 'features/misc';

import { firebaseAuth } from 'libraries/firebase';
import { useEffect, useState } from 'react';
import { MainLayout } from 'components/Layout';
import { useSelector } from 'react-redux';
import { SearchRoutes } from 'features/search';
import { SearchForm } from 'features/search';

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
      path: '/search',
      element: <SearchRoutes />,
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
      <MainLayout>
        <SearchForm />
        {init && element}
      </MainLayout>
    </>
  );
};
