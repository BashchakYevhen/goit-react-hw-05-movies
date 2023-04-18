import { useState, useEffect } from 'react';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { SitePagination } from 'components/Pagination/Pagination';
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
import { useParams } from 'react-router-dom';

// import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState();
  const [pagesCount, setPagesCount] = useState(1);
  const [query, setQuery] = useState('');
  const [queryFilms, setQueryFilms] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();

  console.log(params);
  console.log(currentPage);
  useEffect(() => {
    console.log(currentPage);
    fetchPopularMovie(currentPage)
      .then(response => {
        return (
          setPagesCount(response.data.total_pages),
          setQueryFilms(response.data.results)
        );
      })
      .catch(error => {
        NotificationManager.error(error.message, '', 5000);
        console.log(error);
      });
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
      .catch(error => {
        console.log(error);
        NotificationManager.error(error.message, '', 5000);
      });
  }, [currentPage, query]);

  const handleSubmit = e => {
    e.preventDefault();
    setCurrentPage(1);
    const formQuery = e.currentTarget.input.value.trim();
    setQuery(formQuery);
  };

  const changePage = v => {
    // setCurrentPage(v);
    // fetchPopularMovie(v)
    //   .then(response => {
    //     return (
    //       setPagesCount(response.data.total_pages),
    //       setQueryFilms(response.data.results)
    //     );
    //   })
    //   .catch(error => {
    //     NotificationManager.error(error.message, '', 5000);
    //     console.log(error);
    //   });
  };

  return (
    <>
      <Box>
        <SearchForm onSubmit={handleSubmit}>
          <Input name="input" type="text" placeholder="Search film" />
          <SearchButton type="submit">
            <IoSearch />
          </SearchButton>
        </SearchForm>
        {queryFilms.length !== 0 && (
          <List>
            {queryFilms.map(film => {
              return <CardSet film={film} key={film.id}></CardSet>;
            })}
          </List>
        )}
        <NotificationContainer />
        <SitePagination
          pages={pagesCount}
          handleChange={changePage}
          currentPage={currentPage}
        />
      </Box>
    </>
  );
};

export default Movies;
