import { Box, Title, Text, TitleFilm } from './movieDetails.style';

const MoviesDetails = ({ movieData }) => {
  // const location = useLocation();
  // const toSiteBack = location.state?.from ?? '/';

  return (
    <>
      {movieData ? (
        <Box>
          <TitleFilm>{movieData.title}</TitleFilm>
          <Title>Overview</Title>
          <Text>{movieData.overview}</Text>
          <Title>Reliase</Title>
          <Text>{movieData.release_date}</Text>
          <Title>Rating</Title>
          <Text>{movieData.vote_average}</Text>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
export default MoviesDetails;

/* <StyledLink to={toSiteBack}> Go back</StyledLink> */
