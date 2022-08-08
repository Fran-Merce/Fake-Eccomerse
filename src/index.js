import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { Loader } from './components/UI/Loader/Loader';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
        <Suspense fallback={<Loader></Loader>}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
