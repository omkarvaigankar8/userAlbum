import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Albums from './pages/albums';
import Gallery from './pages/gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/albums/:id" element={<Albums />} />
  <Route path="/albums/gallery/:id" element={<Gallery />} />
    <Route path="/"  element={<App />} exact />
  </Routes>
</BrowserRouter>
);
