/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { MovieListContainer } from './styled';
import { MovieContext } from '../../Context/MovieContext';
import { Movie } from '../Movie';

export function MovieList() {
  const { filtered, fetchPopular, header } = useContext(MovieContext);

  useEffect(() => {
    if (header === 'Em alta') {
      fetchPopular();
    }
  }, [header]);
  return (
    <>
      <MovieListContainer>
        {filtered.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieListContainer>
      {filtered.length === 0 && <p>No movies to display</p>}
    </>
  );
}
