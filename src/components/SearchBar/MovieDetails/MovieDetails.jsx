import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchByMovieId } from 'services/useApi';
import {
  Section,
  Div,
  Img,
  H2,
  P,
  B,
  DivAdd,
  Ul,
  LinkAdd,
} from './MovieDetails.styled';

export const MovieDetails =() => {
  const [film, setFilm] = useState(null);
  const { id: filmId } = useParams();

  useEffect(() => {
    filmId && fetchByMovieId(filmId).then(setFilm).catch(console.log);
  }, [filmId]);

  return (
    <Section>
      {film && (
        <>
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
                <LinkAdd to="cast">Cast</LinkAdd>
              </li>
              <li>
                <LinkAdd to="reviews">Reviews </LinkAdd>
              </li>
            </Ul>
          </DivAdd>
          <Outlet />
        </>
      )}
    </Section>
  );
}
