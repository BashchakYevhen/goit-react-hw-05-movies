import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fetchPoster, fetchTrend } from 'service/fetch';
import { CardSet } from 'components/cardSet/cardSet';
import { List, Title } from './Home.styled';
import { StyledLink } from 'components/movieDetails/movieDetails.style';
const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const [poster, setPoster] = useState(0);
  const location = useLocation();

  const getPoster = ind => {
    setPoster(ind);
  };

  useEffect(() => {
    fetchTrend()
      .then(resolve => {
        setTrendFilms(resolve.data.results);
      })
      .catch(reject => console.log(reject));
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
      }}
    >
      <div
        style={{
          paddingTop: '80px',
          position: 'absolute',
          width: '100%',
          height: '900px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage:
            trendFilms.length > 1
              ? `url( https://image.tmdb.org/t/p/w1280${trendFilms[poster].backdrop_path})`
              : `url(https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg)
          `,
          color: '#fff',
        }}
      >
        <Outlet />
      </div>
      <Title>Trending today</Title>
      <List>
        {trendFilms.map((trendFilm, ind) => {
          return (
            <StyledLink
              to={`/movies/${trendFilm.id}`}
              state={{ from: location }}
              key={trendFilm.id}
              onClick={() => getPoster(ind)}
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
