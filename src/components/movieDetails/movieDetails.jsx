import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { createPortal } from 'react-dom';
import { fetchTrailer, fetchWatchProviders } from 'service/fetch';
import { TrailerModal } from 'components/TrailerModal/TrailerModal';
import { Box, Title, Text, TitleFilm, Button } from './movieDetails.style';

const MoviesDetails = ({ movieData }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [TrailerData, setTrailerData] = useState([]);

  const GetWatchProvider = () => {
    fetchWatchProviders(movieData.id)
      .then(resolve => {
        console.log(resolve.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const toggleClose = () => {
    setIsOpened(!isOpened);
  };

  const GetTrailer = () => {
    fetchTrailer(movieData.id)
      .then(resolve => {
        setTrailerData(resolve.data.results);
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
          <Rating
            initialValue={Math.round(movieData.vote_average)}
            iconsCount={10}
            readonly={true}
            size={20}
          />
          <Button
            onClick={() => {
              toggleClose();
              GetTrailer();
              GetWatchProvider();
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
