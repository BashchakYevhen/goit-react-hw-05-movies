import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrend } from 'service/fetch';
import { CardSet } from 'components/cardSet/cardSet';
import { List, Title } from './Home.styled';
import { StyledLink } from 'components/movieDetails/movieDetails.style';
const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrend()
      .then(resolve => {
        setTrendFilms(resolve.data.results);
      })
      .catch(reject => console.log(reject));
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <List>
        {trendFilms.map(trendFilm => {
          return (
            <StyledLink
              to={`/movies/${trendFilm.id}`}
              state={{ from: location }}
              key={trendFilm.id}
            >
              {CardSet(trendFilm)}
            </StyledLink>
          );
        })}
      </List>
    </div>
  );
};
export default Home;
