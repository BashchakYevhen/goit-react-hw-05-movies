import { useState, useEffect } from 'react';
import { fetchTrend } from 'service/fetch';
import { Container, Box } from './Home.styled';
import { TrendFilms } from 'components/TrendFilms/trendFilms';
import MoviesDetails from 'components/movieDetails/movieDetails';
const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const [BG, setBG] = useState(0);
  const changeBG = ind => {
    setBG(ind);
  };

  useEffect(() => {
    fetchTrend()
      .then(resolve => {
        setTrendFilms(resolve.data.results);
      })
      .catch(reject => console.log(reject));
  }, []);

  return (
    <>
      <Container
        style={{
          position: 'absolute',
          zIndex: '-1',
          backgroundImage:
            trendFilms.length > 0
              ? `url( https://image.tmdb.org/t/p/w1280${trendFilms[BG].backdrop_path})`
              : `url(https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg)
        `,
        }}
      ></Container>
      <div style={{ height: '107px' }}></div>
      <Box>
        <MoviesDetails movieData={trendFilms[BG]} />
        <TrendFilms trendFilms={trendFilms} changeBG={changeBG} />
      </Box>
    </>
  );
};
export default Home;