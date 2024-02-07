import { Filter } from '../../Components/Filter';
import { MovieList } from '../../Components/MovieList';
import { CategoryTitle } from '../../Components/CategoryTitle';
import { Search } from '../../Components/Search';
import { HomeContainer } from './styled';

export function Home() {
  return (
    <HomeContainer>
      <Search />
      <Filter />
      <CategoryTitle />
      <MovieList />
    </HomeContainer>
  );
}
