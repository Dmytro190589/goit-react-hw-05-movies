import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Notification from './Notification/Notifications';
import { lazy } from 'react';

const MovieDetails = lazy(()=> import('../Pages/MovieDetails/MovieDetails'));
const MoviePage = lazy(()=>import('../Pages/MoviePage/MoviePage'));
const Cast = lazy(()=>import('./Cast/Cast'));
const Reviews = lazy(()=>import('./Reviews/Reviews'));
const HomePage = lazy(()=>import('../Pages/HomePage/HomePage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Notification />} />
        </Route>
      </Routes>
    </>
  );
};
