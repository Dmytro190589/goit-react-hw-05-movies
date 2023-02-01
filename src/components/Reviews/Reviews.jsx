import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsOfMovie } from 'services/useApi';
import { Li, P, Span, Ul } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id: filmId } = useParams();

  useEffect(() => {
    filmId && fetchReviewsOfMovie(filmId).then(setReviews).catch(console.log);
  }, [filmId]);
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <Ul>
          {reviews.map(el => (
            <Li key={el.id}>
              <P>
                Author: <Span>{el.author}</Span>
              </P>
              <P>Review</P>
              <Span>{el.content}</Span>
            </Li>
          ))}
        </Ul>
      ) : (
        <P>No reviews yet</P>
      )}
    </>
  );
};
