/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {
  GenresContainer,
  MovieDetailContainer,
  MovieInfoContainer,
  MovieInfoWrapper,
  RatingWrapper,
  TrailerBtnContainer,
  StarContainer,
  Star,
} from './styled';
import { useParams } from 'react-router-dom';
import { IMovie } from '../../Context/MovieContext';
import { MovieTrailer } from '../../Components/MovieTrailer';
import * as Dialog from '@radix-ui/react-dialog';

const apiKey = import.meta.env.VITE_API_KEY;

export function MovieDetail() {
  const [movie, setMovie] = useState<IMovie>();
  const { id } = useParams();
  const averageAsNumber =
    typeof movie?.vote_average === 'string'
      ? parseFloat(movie?.vote_average)
      : movie?.vote_average;
  async function fetchMovie(id: string | undefined) {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
    );

    const movie = await data.json();
    setMovie(movie);
  }

  useEffect(() => {
    fetchMovie(id);
  }, []);

  function formatRuntime(runtime?: number): string {
    if (typeof runtime === 'undefined') {
      return 'Tempo desconhecido';
    }

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours}h ${minutes}min`;
  }

  function renderStars(average: number | undefined): React.ReactNode {
    if (typeof average === 'undefined') {
      return null;
    }

    const maxStars = 5;
    const maxRating = 10;
    const filledStars = (average / maxRating) * maxStars;

    return (
      <StarContainer>
        {Array.from({ length: maxStars }, (_, index) => (
          <Star key={index} $filled={index < filledStars}>
            ★
          </Star>
        ))}
      </StarContainer>
    );
  }

  return (
    <MovieDetailContainer>
      <div>
        {movie?.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        )}
      </div>

      <MovieInfoContainer>
        <h1>{movie?.title}</h1>
        <h2>{movie?.tagline}</h2>
        <RatingWrapper>
          <span>{renderStars(averageAsNumber)}</span>
        </RatingWrapper>

        <MovieInfoWrapper>
          <div>
            <span>Duração</span>
            <p>{formatRuntime(movie?.runtime)}</p>
          </div>

          <div>
            <span>Linguagens</span>
            <div>
              {movie?.spoken_languages?.map((language, i) => (
                <div key={i}>{language.name}</div>
              ))}
            </div>
          </div>

          <div>
            <span>Ano</span>
            <p>
              {movie?.release_date
                ? new Date(movie.release_date).toLocaleDateString('pt-BR')
                : 'Data desconhecida'}
            </p>
          </div>

          <div>
            <span>Status</span>
            <p>{movie?.status}</p>
          </div>
        </MovieInfoWrapper>

        <div>
          <span>Gêneros</span>
          <GenresContainer>
            {movie?.genres?.map((genre, i) => (
              <span key={i}>{genre.name}</span>
            ))}
          </GenresContainer>
        </div>

        <p>{movie?.overview}</p>

        <TrailerBtnContainer>
          <Dialog.Root>
            <Dialog.Trigger>Assista ao trailer</Dialog.Trigger>

            {movie?.id && <MovieTrailer movieId={movie.id} />}
          </Dialog.Root>
        </TrailerBtnContainer>
      </MovieInfoContainer>
    </MovieDetailContainer>
  );
}
