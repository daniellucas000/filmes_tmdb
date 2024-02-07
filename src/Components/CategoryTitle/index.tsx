import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';

export function CategoryTitle() {
  const { header } = useContext(MovieContext);
  return <h1 style={{ color: '#c8d0e5', margin: '2.188rem 0' }}>{header}</h1>;
}
