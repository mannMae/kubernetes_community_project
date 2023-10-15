import { UserRoutes } from 'features/user';
import { Navigate } from 'react-router-dom';

export const protectedRoutes = [
  {
    path: '/app',
    children: [
      {
        path: '/app',
        element: <>app</>,
      },
      {
        path: '/app/user',
        element: <UserRoutes />,
      },
      {
        path: '/app/*',
        element: <Navigate to="." />,
      },
    ],
  },
];
