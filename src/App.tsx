import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { SidePanel } from './Components/SidePanel';
import { MovieContextProvider } from './Context/MovieContext';
import { AppContainer } from './styles/App';

export function App() {
  return (
    <MovieContextProvider>
      <AppContainer>
        <SidePanel />
        <Outlet />
      </AppContainer>

      <GlobalStyle />
    </MovieContextProvider>
  );
}
