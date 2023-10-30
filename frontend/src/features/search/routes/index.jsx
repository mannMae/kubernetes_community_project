import { Route, Routes } from 'react-router-dom';
import { Search } from './Search';

export const SearchRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
    </Routes>
  );
};
