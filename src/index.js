import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LangContextProvider from './LangContext';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
  // Link
} from "react-router-dom";

ReactDOM.render(
  <LangContextProvider>
    <React.StrictMode>
      <Router>
        <Routes>

          <Route path="/" element={<App />} />

        </Routes>
      </Router>
    </React.StrictMode>
  </LangContextProvider>,
  document.getElementById('root')
);
