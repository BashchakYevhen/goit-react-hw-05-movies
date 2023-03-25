import {
  TopList,
  Track,
  Poster,
  FilmItem,
  Box,
  Button,
  BgBox,
} from './trendFilm.styled';

export const TrendFilms = ({ trendFilms, changeBG }) => {
  return (
    <Track>
      <Box>
        <TopList>
          {trendFilms.map((el, ind) => {
            return (
              <FilmItem
                key={el.id}
                onClick={() => {
                  changeBG(ind);
                }}
              >
                <Poster
                  src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                  alt="22"
                />
              </FilmItem>
            );
          })}
        </TopList>
      </Box>
      <Button>L</Button>
      <BgBox />
    </Track>
  );
};
