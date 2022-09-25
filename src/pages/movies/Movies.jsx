import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CardSet } from 'components/cardSet/cardSet';
import { queryFetch } from 'service/fetch';
import { List } from 'pages/home/Home.styled';
const Movies = () => {
  const [query, setQuery] = useState('');
  const [queryFilms, setQueryFilms] = useState([]);
  useEffect(() => {
    if (query === '') {
      return;
    }
    queryFetch(query)
      .then(response => setQueryFilms(response.data.results))
      .catch(error => console.log(error));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const formQuery = e.currentTarget.input.value.trim();
    setQuery(formQuery);
  };
  const location = useLocation();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="input" type="text" placeholder="Search film" />
        <button type="submit">Search</button>
      </form>

      {queryFilms.length !== 0 ? (
        <List>
          {queryFilms.map(film => {
            return (
              <Link
                to={`/movies/${film.id}`}
                state={{ from: location }}
                key={film.id}
              >
                {CardSet(film)}
              </Link>
            );
          })}
        </List>
      ) : (
        <p>No items for search</p>
      )}
    </>
  );
};

export default Movies;
