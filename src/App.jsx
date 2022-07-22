import { Navbar } from './components/Navbar/Navbar';
import { MainRouter } from './Routes/MainRouter';
import { GlobalStyles } from './styles/GlobalStyles';
function App() {
  return (
    <>
      <Navbar />
      <MainRouter />
      <GlobalStyles />
    </>
  );
}

export default App;
