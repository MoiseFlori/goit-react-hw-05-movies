import React, { Suspense, lazy } from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Loader from './loader/Loader';



const Home = lazy(() => import('./home/Home'));
const MovieDetails = lazy(() => import('./movieDetails/MovieDetails'));
const Movies = lazy(() => import('./movies/Movies'));


export const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" replace />}  />
        </Routes>
      </Suspense>
    </div>
  );
};
