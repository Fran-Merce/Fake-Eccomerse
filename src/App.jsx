import { Navbar } from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './styles/GlobalStyles';
import { AppLayout } from './components/Layout/AppLayout';

import { useAuthCheck } from './hooks/useCheckAuth';
import AppRouter from './Routes/Routers/AppRouter';
import { Footer } from './components/Footer/Footer';
import { Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  useAuthCheck();
  return (
    <AppLayout>
      <Navbar />
      <AppRouter />
      <Footer />
      <GlobalStyles />
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        transition={Slide}
limit={4}
      />
    </AppLayout>
  );
}

export default App;
