import { createContext, useState } from 'react';

const apiKey = import.meta.env.VITE_API_KEY;

type languages = {
  name: string;
};

export type IMovie = {
  id: number;
  title: string;
  tagline: string;
  vote_average: string;
  runtime: number;
  spoken_languages: languages[];
  release_date: string;
  status: string;
  genres: languages[];
  poster_path: string;
  genre_ids: number[];
  overview?: string;
};

type PropsMovieContext = {
  movies: IMovie[];
  setMovies: React.Dispatch<React.SetStateAction<never[]>>;
  fetchPopular: () => Promise<void>;
  fetchSearch: (query: string) => Promise<void>;
  filtered: IMovie[];
  setFiltered: React.Dispatch<React.SetStateAction<IMovie[]>>;
  activeGenre: number;
  setActiveGenre: React.Dispatch<React.SetStateAction<number>>;
  header: string;
  setHeader: React.Dispatch<React.SetStateAction<string>>;
  fetchNowPlaying: () => Promise<void>;
  fetchTopRated: () => Promise<void>;
  fetchUncoming: () => Promise<void>;
};

export const MovieContext = createContext<PropsMovieContext>(
  {} as PropsMovieContext
);

export function MovieContextProvider({ children }: React.PropsWithChildren) {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState<IMovie[]>([]);
  const [activeGenre, setActiveGenre] = useState<number>(0);
  const [header, setHeader] = useState('Em alta');

  const fetchPopular = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader('Em alta');
    setActiveGenre(0);
  };

  const fetchSearch = async (query: string) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}&page=1&include_adult=false`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader(`Resultados para "${query}"`);
    setActiveGenre(0);
  };

  const fetchNowPlaying = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=1`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader('Lançamentos');
    setActiveGenre(0);
  };

  const fetchTopRated = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=pt-BR&page=1'
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader('Melhores avaliados');
    setActiveGenre(0);
  };

  const fetchUncoming = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=pt-BR&page=1'
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader('Em breve');
    setActiveGenre(0);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        fetchPopular,
        fetchSearch,
        filtered,
        setFiltered,
        activeGenre,
        setActiveGenre,
        header,
        setHeader,
        fetchNowPlaying,
        fetchTopRated,
        fetchUncoming,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
