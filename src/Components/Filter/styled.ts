import styled from 'styled-components';

export const FilterContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.938rem;
  margin: 20px 0;

  button {
    background-color: #1a2237;
    border: none;
    border-radius: 15px;
    color: #eaedf5;
    cursor: pointer;
    font-weight: 500;
    padding: 10px 25px;
    font-size: 1rem;

    &:hover {
      background: #273453;
    }
  }

  button:last-child {
    background-color: transparent;
    color: #8b99b6;
    display: flex;
    font-size: 18px;
    padding: 0 10px;
  }
`;
