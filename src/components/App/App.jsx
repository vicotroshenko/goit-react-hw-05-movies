import { Route, Routes } from 'react-router-dom'
import SharedLayout from '../SharedLayout/SharedLayout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/movies/:movieId' element={<MovieDetails/>}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
      </Route>
    </Routes>
  );
};
