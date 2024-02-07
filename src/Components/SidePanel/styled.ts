import styled from 'styled-components';

export const SidePanelContainer = styled('aside')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  height: 500px;
  position: fixed;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  background-color: #171e31;
  border-radius: 0.938rem;

  svg {
    color: #546487;
    cursor: pointer;
  }

  > svg:last-child {
    cursor: not-allowed;
  }
`;
