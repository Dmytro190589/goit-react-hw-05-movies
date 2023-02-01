import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastOfMovie } from 'services/useApi';
import { Img, Li, Ul, P, Span } from './Cast.styled';
 const Cast = () => {
  const [cast, setCast] = useState(null);

  const { id: filmId } = useParams();

  useEffect(() => {
    filmId && fetchCastOfMovie(filmId).then(setCast).catch(console.log);
  }, [filmId]);
  return (
    <div>
      {cast && cast.length > 0 ? (
        <Ul>
          {cast.map(el => (
            <Li key={el.id}>
              {el.profile_path ? (
                <Img
                  src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                  alt={el.character}
                  width="100"
                />
              ) : (
                <Img
                  src="https://i.stack.imgur.com/YaL3s.jpg"
                  alt={el.character}
                  width="100"
                />
              )}
              <P>
                Original name: <Span>{el.original_name}</Span>
              </P>
              <P>
                Character: <Span> {el.character}</Span>
              </P>
            </Li>
          ))}
        </Ul>
      ) : (
        <Span>No cast in this movie</Span>
      )}
    </div>
  );
};
export default Cast;