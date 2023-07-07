import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './index.css';
import 'leaflet/dist/leaflet.css';
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
