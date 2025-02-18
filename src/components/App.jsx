import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import { MovieDetails } from './movieDetails/MovieDetails';
import Movies from './movies/Movies';
import Navbar from './navbar/Navbar';

export const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
