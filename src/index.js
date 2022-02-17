import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LangContextProvider from './LangContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <LangContextProvider>
      <React.StrictMode>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </React.StrictMode>
    </LangContextProvider>

  </Router>,
  document.getElementById('root')
);
