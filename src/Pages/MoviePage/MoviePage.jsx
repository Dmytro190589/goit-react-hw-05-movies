import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchFilms } from 'services/useApi';
import { Li, LinkModal, Ul } from './MoviePage.styled';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const MoviePage = () => {
  const [filmList, setFilmList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!nameParam) {
      return;
    }
    fetchSearchFilms(nameParam)
      .then(data => {
        if (data.length === 0) {
          toast.error(`Sorry, there are not films for searching ${nameParam}`);
        }
        setFilmList(data);
      })
      .catch(console.log);
  }, [nameParam]);

  const handelSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.elements.query;
    if (value) {
      setSearchParams({ query: value });
    }
  };
  return (
    <>
      <SearchBar onSubmit={handelSubmit} />
      {filmList.length > 0 && (
        <Ul>
          {filmList.map(({ title, id }) => (
            <Li key={id}>
              <LinkModal to={`${id}`} state={{ from: location }}>
                {title}
              </LinkModal>
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
export default MoviePage;
