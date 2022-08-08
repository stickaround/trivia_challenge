import React from 'react';
import ReactDOM from 'react-dom/client';

import { TriviaRoutes as Routes } from './Routes';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

reportWebVitals();
