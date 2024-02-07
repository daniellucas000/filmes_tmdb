import { IMovie } from '../../Context/MovieContext';
import { Link } from 'react-router-dom';

import { MovieContainer } from './styled';
import defaultImg from '../../assets/no-image.jpg';

type MoviesProps = {
  movie: IMovie;
};

export function Movie({ movie }: MoviesProps) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <MovieContainer>
        {movie.poster_path !== null ? (
          <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
        ) : (
          <img src={defaultImg} alt="" />
        )}
      </MovieContainer>
    </Link>
  );
}
