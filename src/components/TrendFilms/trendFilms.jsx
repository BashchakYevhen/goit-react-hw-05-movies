import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

import { Track, Poster, FilmItem, Box, BgBox } from './trendFilm.styled';

export const TrendFilms = ({ trendFilms, changeBG }) => {
  return (
    <Track>
      <Box>
        <Swiper
          // slidesPerView={6}
          // spaceBetween={20}
          navigation={true}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {trendFilms.map((el, ind) => {
            return (
              <SwiperSlide key={el.id} zoom={true}>
                <FilmItem
                  onClick={() => {
                    changeBG(ind);
                  }}
                >
                  <Poster
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt="22"
                  />
                </FilmItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>

      <BgBox />
    </Track>
  );
};
