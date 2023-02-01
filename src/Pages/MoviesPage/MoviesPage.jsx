import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchFilms } from 'services/useApi';
import { Li, LinkModal, Ul } from './MoviesPage.styled';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const MoviesPage = () => {
  const [filmList, setFilmList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (nameParam !== '' && nameParam !== null)
      fetchSearchFilms(nameParam).then(setFilmList).catch(console.log);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };
  const handelSubmit = e => {
    e.preventDefault();
    fetchSearchFilms(nameParam.trim()).then(data => {
      if (data.length === 0) {
        toast.error(`Sorry, there are not films for searching ${nameParam}`);
      }
      setFilmList(data);
      setSearchParams('');
    });
  };

  return (
    <>
      <SearchBar
        onSubmit={handelSubmit}
        onChange={changeQuery}
        value={nameParam}
      />
      {filmList && (
        <Ul>
          {filmList.map(({ title, id }) => (
            <Li key={id}>
              <LinkModal to={`${id}`}>{title}</LinkModal>
            </Li>
          ))}
        </Ul>
      )}
      <ToastContainer
        position="top-center"
        type="warning"
        theme="colored"
        autoClose={1500}
      />
    </>
  );
};
