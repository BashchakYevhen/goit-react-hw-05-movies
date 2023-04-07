import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { CardSet } from 'components/cardSet/cardSet';
import { fetchPopularMovie, queryFetch } from 'service/fetch';
import {
  Box,
  Input,
  List,
  SearchForm,
  SearchButton,
} from 'pages/movies/Movie.styled';
import { SitePagination } from 'components/Pagination/Pagination';

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [query, setQuery] = useState('');
  const [queryFilms, setQueryFilms] = useState([]);

  console.log(currentPage);

  useEffect(() => {
    fetchPopularMovie(currentPage)
      .then(response => {
        return (
          setPagesCount(response.data.total_pages),
          setQueryFilms(response.data.results)
        );
      })
      .catch(error => console.log(error));
  }, [currentPage]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    queryFetch(query, currentPage)
      .then(response => {
        return (
          setPagesCount(response.data.total_pages),
          setQueryFilms(response.data.results)
        );
      })
      .catch(error => console.log(error));
  }, [currentPage, query]);

  const handleSubmit = e => {
    e.preventDefault();
    setCurrentPage(1);
    const formQuery = e.currentTarget.input.value.trim();
    setQuery(formQuery);
  };

  // const location = useLocation();.
  return (
    <>
      <div style={{ height: '107px' }}></div>
      <Box>
        <SearchForm onSubmit={handleSubmit}>
          <Input name="input" type="text" placeholder="Search film" />
          <SearchButton type="submit">
            <IoSearch />
          </SearchButton>
        </SearchForm>
        {queryFilms.length !== 0 ? (
          <List>
            {queryFilms.map(film => {
              return (
                <CardSet film={film} key={film.id}>
                  {/* <Link
                  to={`/movies/${film.id}`}
                  state={{ from: location }}
                  key={film.id}
                >
                  {CardSet(film)}
                </Link>  */}
                </CardSet>
              );
            })}
          </List>
        ) : (
          <p>No items for search</p>
        )}
        <SitePagination
          pages={pagesCount}
          handleChange={setCurrentPage}
          currentPage={currentPage}
        />
      </Box>
    </>
  );
};

export default Movies;
