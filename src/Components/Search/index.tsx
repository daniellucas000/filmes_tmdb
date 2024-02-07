// import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

import { SearchContainer } from './styled';
import { useContext, useState } from 'react';
import { MovieContext } from '../../Context/MovieContext';

export function Search() {
  const [value, setValue] = useState('');
  const { fetchPopular, fetchSearch } = useContext(MovieContext);

  function handleKeyUp(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && value !== '') {
      const query = value.trim();
      if (query === '') {
        fetchPopular();
      } else {
        fetchSearch(query);
      }
      setValue('');
    }
  }
  return (
    <SearchContainer>
      <label htmlFor="search">
        <RiSearchLine size={16} />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Pesquisar filmes"
        onKeyDown={(e) => handleKeyUp(e)}
        onChange={(e) => setValue(e.target.value)}
      />
    </SearchContainer>
  );
}
