import { useContext, useState, useEffect } from 'react';
import { genres } from '../../genres';

import { FilterContainer } from './styled';
import { MovieContext } from '../../Context/MovieContext';

import { BiArrowFromRight } from 'react-icons/bi';
import { MdMoreHoriz } from 'react-icons/md';

export function Filter() {
  const { setActiveGenre, activeGenre, setFiltered, movies, header } =
    useContext(MovieContext);

  const [moreGenres, setMoreGenres] = useState(false);

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(activeGenre)
      );
      setFiltered(filtered);
    }
  }, [activeGenre, header, movies, setFiltered]);

  return (
    <FilterContainer>
      <button onClick={() => setActiveGenre(0)}>Todos</button>
      <button onClick={() => setActiveGenre(28)}>Ação</button>
      <button onClick={() => setActiveGenre(12)}>Aventura</button>

      {moreGenres &&
        genres.map((genre) => (
          <button key={genre.id} onClick={() => setActiveGenre(genre.id)}>
            {genre.name}
          </button>
        ))}
      <button onClick={() => setMoreGenres(!moreGenres)}>
        {moreGenres ? <BiArrowFromRight /> : <MdMoreHoriz />}
      </button>
    </FilterContainer>
  );
}
