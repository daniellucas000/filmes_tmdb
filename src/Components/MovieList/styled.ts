import styled from 'styled-components';

export const MovieListContainer = styled('main')`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  gap: 1rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;
