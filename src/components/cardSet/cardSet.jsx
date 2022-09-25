import { FilmCard, FilmImg } from './cardSet.Style';
export const CardSet = ({ poster_path, original_title, name }) => {
  return (
    <FilmCard>
      <FilmImg
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
      {original_title ? <p>{original_title}</p> : <p>{name}</p>}
    </FilmCard>
  );
};
