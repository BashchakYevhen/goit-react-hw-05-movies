import { TrailerModal } from 'components/TrailerModal/TrailerModal';
import { useState } from 'react';
import { fetchTrailer } from 'service/fetch';
import { createPortal } from 'react-dom';
import { Box, Title, Text, TitleFilm, Button } from './movieDetails.style';

const MoviesDetails = ({ movieData }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleClose = () => {
    setIsOpened(!isOpened);
  };

  const [TrailerData, setTrailerData] = useState([]);
  const GetTrailer = () => {
    fetchTrailer(movieData.id)
      .then(resolve => {
        setTrailerData(resolve.data.results);
        console.log(resolve);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      {movieData ? (
        <Box>
          <TitleFilm>{movieData.title}</TitleFilm>
          <Title>Overview</Title>
          <Text>{movieData.overview}</Text>
          <Title>Release</Title>
          <Text>{movieData.release_date}</Text>
          <Title>Rating</Title>
          <Text>{movieData.vote_average}</Text>
          <Button
            onClick={() => {
              toggleClose();
              GetTrailer();
            }}
          >
            Watch trailer
          </Button>
          {isOpened &&
            TrailerData.length > 0 &&
            createPortal(
              <TrailerModal
                toggleClose={toggleClose}
                TrailerData={TrailerData}
                setTrailerData={setTrailerData}
              />,
              document.getElementById('modal')
            )}
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
export default MoviesDetails;

/* <StyledLink to={toSiteBack}> Go back</StyledLink> */
