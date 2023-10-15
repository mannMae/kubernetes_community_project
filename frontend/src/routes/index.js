import { useRoutes } from 'react-router-dom';

const App = () => {
  return <>APP</>;
};

export const AppRoutes = () => {
  const routes = [
    {
      path: '*',
      element: <App />,
    },
  ];

  const element = useRoutes([...routes]);
  return <>{element}</>;
};
