import styled from 'styled-components';

export const MovieContainer = styled('div')`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 24px 0 #3b4d7d;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  h2 {
    bottom: 0;
    font-size: 1rem;
    font-weight: 600;
    margin: 15px 10px;
    position: absolute;
    color: #fff;
  }
`;
