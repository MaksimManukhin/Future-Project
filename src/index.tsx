import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './Redux/cart/store';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </React.StrictMode>
);




