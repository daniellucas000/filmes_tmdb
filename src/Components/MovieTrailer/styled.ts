import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 576px) {
    min-width: 22rem;
  }

  iframe {
    @media (max-width: 576px) {
      width: 350px;
    }
  }
`;

export const TrailerNotFound = styled('div')`
  img {
    position: relative;
    width: 100%;
  }

  h1 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
