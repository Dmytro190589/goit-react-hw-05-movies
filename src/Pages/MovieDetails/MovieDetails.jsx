import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchByMovieId } from 'services/useApi';
import {
  B,
  Div,
  DivAdd,
  H2,
  Img,
  LinkAdd,
  LinkBack,
  P,
  Section,
  Ul,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const location = useLocation();

  const { id: filmId } = useParams();
  useEffect(() => {
    filmId && fetchByMovieId(filmId).then(setFilm).catch(console.log);
  }, [filmId]);
  return (
    <Section>
      {film && (
        <>
          <LinkBack to={location.state?.from ?? '/'}> Go Back</LinkBack>
          <Div>
            <Img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.title}
              width="300"
            />
            <div>
              <H2>{film.title}</H2>
              <P>
                User score: <span>{film.vote_average.toFixed(2)}</span>
              </P>
              <B>Overview</B>
              <P>{film.overview}</P>
              <B>Genres</B>
              <P>{film.genres.map(({ name }) => `${name} `)}</P>
            </div>
          </Div>
          <DivAdd>
            <P>Additional information</P>
            <Ul>
              <li>
                <LinkAdd to="cast" state={{ from: location.state.from }}>
                  Cast
                </LinkAdd>
              </li>
              <li>
                <LinkAdd to="reviews" state={{ from: location.state.from }}>
                  Reviews
                </LinkAdd>
              </li>
            </Ul>
          </DivAdd>
          <Suspense fallback={<div>Loading....</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </Section>
  );
};
export default MovieDetails;
