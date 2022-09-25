import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/fetch';
import { ActorPhoto, ActorCard, ActorList } from './cast.style';

const Cast = () => {
  const { id } = useParams({});
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCast(id)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <ActorList>
      {cast.map(({ profile_path, id, original_name }) => {
        return (
          <ActorCard key={id}>
            {profile_path && (
              <ActorPhoto
                alt={original_name}
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              />
            )}
            <h3>{original_name}</h3>
          </ActorCard>
        );
      })}
    </ActorList>
  );
};
export default Cast;
