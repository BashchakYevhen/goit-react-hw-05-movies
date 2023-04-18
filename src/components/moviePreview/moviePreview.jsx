import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { createPortal } from 'react-dom';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { fetchTrailer } from 'service/fetch';
import { TrailerModal } from 'components/TrailerModal/TrailerModal';
import { Box, Title, Text, TitleFilm, Button } from './moviePreview.style';

const MoviesPreview = ({ movieData }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [TrailerData, setTrailerData] = useState([]);

  const toggleClose = () => {
    setIsOpened(!isOpened);
  };

  const GetTrailer = () => {
    fetchTrailer(movieData.id)
      .then(resolve => {
        setTrailerData(resolve.data.results);
      })
      .catch(error => {
        NotificationManager.error(error.message, '', 5000);
        console.log(error);
      });
  };

  return (
    <>
      {movieData && (
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
          <NotificationContainer />
        </Box>
      )}
    </>
  );
};
export default MoviesPreview;
