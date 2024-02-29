import styled from 'styled-components';

export const MovieDetailContainer = styled('div')`
  margin-left: 5.625rem;
  display: flex;
  gap: 4rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }

  > div:nth-child(1) img {
    width: 350px;
    height: 550px;
    border-radius: 10px;

    @media (max-width: 576px) {
      max-width: 290px;
      width: 100%;
      height: 430px;
    }
  }
`;

export const MovieInfoContainer = styled('section')`
  h1 {
    font-size: 3rem;
    line-height: 1;
    font-weight: 300;
    margin-bottom: 0.75rem;

    @media (max-width: 576px) {
      font-size: 1.875rem;
    }
  }

  h2 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 300;
    color: var(--gray);
  }

  > div:nth-child(5) {
    margin-bottom: 1.5rem;
  }
`;

export const MovieInfoWrapper = styled('div')`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;

  font-size: 1.125rem;
  line-height: 1.75rem;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem 1rem;
  }

  span {
    color: var(--gray);
  }
  p {
    font-size: 1rem;
  }
`;

export const RatingWrapper = styled('div')`
  margin: 1.5rem 0;
  span {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

export const GenresContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    padding: 1px 8px;
    font-weight: 500;
    text-align: center;
    color: #10141e;
    background: #fff;
    border-radius: 0.375rem;
  }
`;

export const TrailerBtnContainer = styled('div')`
  margin-top: 2rem;

  button {
    padding: 0.75rem 2rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    background: #5a6a90;
    border-radius: 0.375rem;
    border: 0;
    color: #ffff;

    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const StarContainer = styled.div`
  display: flex;
`;

export const Star = styled.span<{ $filled: boolean }>`
  color: ${({ $filled }) => ($filled ? 'gold' : '#546487')};
`;
