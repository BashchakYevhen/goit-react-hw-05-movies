import { GlobalStyle } from 'globalStyle';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Header } from './header/Header';
// import  Home  from '../pages/home/Home';
// import  Movies  from '../pages/movies/Movies';
// import  MoviesDetails  from './movieDetails/movieDetails';
// import Cast from './cast/cast';
// import Review from './reviews/review';

const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MoviesDetails = lazy(() => import('./movieDetails/movieDetails'));
const Review = lazy(() => import('./reviews/review'));
const Cast = lazy(() => import('./cast/cast'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
