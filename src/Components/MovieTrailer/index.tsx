import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay, TrailerNotFound } from './styled';
import noImage from '../../assets/no-image.jpg';

interface MovieTrailerProps {
  movieId: number | undefined;
}

interface Video {
  key: string;
}

const apiKey = import.meta.env.VITE_API_KEY;

export function MovieTrailer({ movieId }: MovieTrailerProps) {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=pt-BR`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        return response.json();
      })
      .then((data) => {
        const videos: Video[] = data.results;
        if (videos.length > 0) {
          setTrailerKey(videos[0].key);
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar o trailer:', error);
      });
  }, [movieId]);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        {trailerKey ? (
          <YouTube
            videoId={trailerKey}
            opts={{ width: '640', height: '360' }}
          />
        ) : (
          <TrailerNotFound>
            <img src={noImage} alt="No image" />
            <h1>Trailer não encontrado</h1>
          </TrailerNotFound>
        )}
      </Content>
    </Dialog.Portal>
  );
}
