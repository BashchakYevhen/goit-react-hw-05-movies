import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrend } from 'service/fetch';
import { CardSet } from 'components/cardSet/cardSet';

const TrendFilms = () => {
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
    <>
      <Link to={`${trendFilms.id}`} state={{ from: location }}>
        <CardSet data={trendFilms} />
      </Link>
    </>
  );
};
