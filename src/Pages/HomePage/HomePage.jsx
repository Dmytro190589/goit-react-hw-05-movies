import { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { fetchTrendingFilm } from 'services/useApi';
import { H1, Li, LinkModal, Section, Ul } from './HomePage.styled';

 const HomePage = () => {
  const [trendList, setTrendList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrendingFilm().then(setTrendList);
  }, []);

  return (
    <Section>
      <H1>Trending Today</H1>
      <Ul>
        {trendList.map(({ title, id }) => (
          <Li key={id}>
            <LinkModal to={`movies/${id}`} state={{ from: location }}>
              {title}
            </LinkModal>
          </Li>
        ))}
      </Ul>
    </Section>
  );
};
export default HomePage;
