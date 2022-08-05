import { Navbar } from './components/Navbar/Navbar';

import { GlobalStyles } from './styles/GlobalStyles';
import { AppLayout } from './components/Layout/AppLayout';

import { useAuthCheck } from './hooks/useCheckAuth';
import AppRouter from './Routes/Routers/AppRouter';

function App() {
  useAuthCheck();
  return (
    <AppLayout>
      <Navbar />
      <AppRouter />
      <GlobalStyles />
    </AppLayout>
  // <h1>holi</h1>
  );
}

export default App;
