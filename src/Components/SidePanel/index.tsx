import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';

import { MdOutlineMovieFilter } from 'react-icons/md';
import { BiMoviePlay, BiCameraMovie } from 'react-icons/bi';
import { SiThemoviedatabase } from 'react-icons/si';
import { BsStars } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

import { SidePanelContainer } from './styled';
import { useLocation } from 'react-router-dom';

export function SidePanel() {
  const { fetchPopular, fetchNowPlaying, fetchTopRated, fetchUncoming } =
    useContext(MovieContext);

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <SidePanelContainer>
      <a href="/">
        <SiThemoviedatabase size={36} />
      </a>
      {isHomePage && (
        <div>
          <MdOutlineMovieFilter size={28} onClick={() => fetchPopular()} />

          <BiMoviePlay size={28} onClick={() => fetchNowPlaying()} />

          <BsStars size={28} onClick={() => fetchTopRated()} />

          <BiCameraMovie size={28} onClick={() => fetchUncoming()} />
        </div>
      )}

      <FaUserCircle size={28} />
    </SidePanelContainer>
  );
}
