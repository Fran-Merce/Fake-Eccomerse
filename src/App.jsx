import { Navbar } from './components/Navbar/Navbar';

import { GlobalStyles } from './styles/GlobalStyles';
import { AppLayout } from './components/Layout/AppLayout';

import { useAuthCheck } from './hooks/useCheckAuth';
import AppRouter from './Routes/Routers/AppRouter';
import { Footer } from './components/Footer/Footer';

function App() {
  useAuthCheck();
  return (
    <AppLayout>
      <Navbar />
      <AppRouter />
      <Footer />
      <GlobalStyles />
    </AppLayout>
  // <h1>holi</h1>
  );
}

export default App;
