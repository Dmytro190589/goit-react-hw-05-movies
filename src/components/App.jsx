import {HomePage} from 'Pages/HomePage/HomePage';
import { MoviesPage } from 'Pages/MoviesPage/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import {Layout} from './Layout/Layout';
// import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<>details</>}>
            <Route path="cast" element={<div>cast</div>} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
