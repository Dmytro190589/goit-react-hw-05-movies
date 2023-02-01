import { useState, useEffect } from 'react';
import {  Outlet } from 'react-router-dom';
import { fetchTrendingFilm } from 'services/useApi';
import { H1, Li, LinkModal, Section, Ul } from './HomePage.styled';

export const HomePage = () => {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    fetchTrendingFilm().then(setTrendList)
  }, []);

  return (
    <Section>
      <H1>Trending Today</H1>
      <Ul>
        {trendList.map(({ title, id }) => (
          <Li key={id}>
            <LinkModal to={`movies/${id}`}>{title}</LinkModal>
          </Li>
        ))}
      </Ul>
      <Outlet />
    </Section>
  );
};

