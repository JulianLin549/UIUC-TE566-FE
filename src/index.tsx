import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./customHooks/ScrollToTop";
import "./static/css/main.css";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ScrollToTop />
          <App/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

