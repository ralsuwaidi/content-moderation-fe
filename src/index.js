import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/DetailPage';
import ListPage from './Pages/ListPage';
import reportWebVitals from './reportWebVitals';
import { Routes, HashRouter, Route } from "react-router-dom";
import Signup from './Pages/Signup';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <HashRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movie/:movieId" element={<App />} />
        </Routes>
      </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
