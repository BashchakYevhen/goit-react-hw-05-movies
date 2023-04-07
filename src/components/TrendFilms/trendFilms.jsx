import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

import { Track, Poster, FilmItem, Box, BgBox } from './trendFilm.styled';

export const TrendFilms = ({ trendFilms, changeBG }) => {
  return (
    <Track>
      {/* <p>Trends 20</p> */}
      <Box>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          slidesPerGroup={5}
          loop={true}
          navigation={true}
          // breakpoints={{
          //   '@0.00': {
          //     slidesPerView: 1,
          //     spaceBetween: 0,
          //   },
          //   480: {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 4,
          //     spaceBetween: 20,
          //   },
          //   1280: {
          //     slidesPerView: 6,
          //     spaceBetween: 20,
          //   },
          // }}
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
                    alt={el.title}
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
