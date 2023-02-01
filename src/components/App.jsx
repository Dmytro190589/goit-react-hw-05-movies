import { HomePage } from 'Pages/HomePage/HomePage';
import { MoviePage } from 'Pages/MoviePage/MoviePage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:id" element={<MovieDetails/>}>
            <Route path="cast" element={<div>cast</div>} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
