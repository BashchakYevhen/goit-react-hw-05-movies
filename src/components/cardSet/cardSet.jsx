import { Rating } from 'react-simple-star-rating';
import { Link, useLocation } from 'react-router-dom';
import {
  FilmCard,
  FilmDataBox,
  FilmImg,
  OverviewText,
  StyledLink,
} from './cardSet.Style';
import { FlexBox } from 'components/FlexBox/FlexBox';
export const CardSet = ({ film }) => {
  const {
    poster_path,
    original_title,
    title,
    overview,
    release_date,
    vote_average,
    id,
  } = film;

  const location = useLocation();

  return (
    <FilmCard>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <FilmImg
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
        />
      </Link>
      <FilmDataBox>
        <FlexBox>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title ? <h3>{title}</h3> : <h3>{original_title}</h3>}
          </StyledLink>
          <span>{release_date}</span>
        </FlexBox>
        <OverviewText>{overview}</OverviewText>
        <Rating
          initialValue={Math.round(vote_average)}
          iconsCount={10}
          readonly={true}
          size={20}
        />
      </FilmDataBox>
    </FilmCard>
  );
};
