import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { fetchById, fetchCast } from 'service/fetch';
import { Box, InfoBox, Poster, Title } from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [providers, setProviders] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchById(id)
      .then(resolve => {
        setData(resolve.data);
      })
      .catch(error => {
        NotificationManager.error(error.message, '', 5000);
      });

    fetchCast(id)
      .then(resolve => {
        setProviders(resolve.data);
      })
      .catch(error => {
        NotificationManager.error(error.message, '', 5000);
        console.log(error);
      });
  }, []);

  //   console.log(data, providers, location);
  return (
    data && (
      <>
        <Link to={location.state.from.pathname}>Go Back</Link>
        <Box>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={data.original_title}
          />
          <InfoBox>
            <Title>{data.title}</Title>
            {data.tagline && <span>"{data.tagline}"</span>}
            <div>
              Country:
              {data.production_countries.map(el => {
                return <span> {el.name} </span>;
              })}
            </div>

            <span>Date: {data.release_date}</span>
            <span>Overview: {data.overview}</span>
          </InfoBox>

          <NotificationContainer />
        </Box>
      </>
    )
  );
};

export default MovieDetails;
