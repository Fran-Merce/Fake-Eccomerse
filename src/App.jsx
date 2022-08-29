
import { GlobalStyles } from './styles/GlobalStyles';
import { AppLayout } from './components/Layout/AppLayout';

import { useAuthCheck } from './hooks/useCheckAuth';
import AppRouter from './Routes/Routers/AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import { CustomToastContainer } from './components/UI/CustomToastContainer/CustomToastContainer';

function App() {
  useAuthCheck();
  return (
    <AppLayout>
      <AppRouter />
      <CustomToastContainer />
      <GlobalStyles />
    </AppLayout>
  );
}

export default App;
