import HomePage from 'Pages/HomePage/HomePage';
import { MoviesPage } from 'Pages/MoviesPage/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="movies" element={<MoviesPage/>} />
        </Route>
      </Routes>
    </>
  );
};
