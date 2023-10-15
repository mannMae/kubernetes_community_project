import { AuthRoutes } from 'features/auth';
import { Navigate } from 'react-router-dom';

export const publicRoutes = [
  {
    path: '/auth',
    element: <AuthRoutes />,
    children: [
      {
        path: '',
        children: [
          {
            path: '*',
            element: <Navigate to="." />,
          },
        ],
      },
    ],
  },
];
