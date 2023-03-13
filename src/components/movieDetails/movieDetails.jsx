import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchById } from 'service/fetch';
import { Box, Poster, FilmInfo, Title, StyledLink } from './movieDetails.style';

const MoviesDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const toSiteBack = location.state?.from ?? '/';

  useEffect(() => {
    fetchById(id)
      .then(response => setMovieData(response.data))
      .catch(error => console.log(error));
  }, [id]);
  const {
    title,
    // poster_path,
    overview,
    release_date,
    backdrop_path,
    vote_average,
  } = movieData;
  return (
    <>
      {' '}
      <div>
        <StyledLink to={toSiteBack}> Go back</StyledLink>
        <Box>
          {/* <Poster
            alt={title}
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          ></Poster> */}
          <FilmInfo>
            <Title>{title}</Title>
            <Title>Overview</Title>
            <p>{overview}</p>
            <Title>Reliase</Title>
            <p>{release_date}</p>
            <Title>Rating</Title>
            <p>{vote_average}</p>
          </FilmInfo>
        </Box>
        {/* <StyledLink to={'Cast'} state={{ from: location }}>
          Cast
        </StyledLink>
        <StyledLink to={'Review'} state={{ from: location }}>
          Review
        </StyledLink> */}
        <Outlet />
      </div>
    </>
  );
};
export default MoviesDetails;
