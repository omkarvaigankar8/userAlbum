import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Albums from './pages/albums';
import Gallery from './pages/gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Switch>
  <Route exact path="/albums/:id"><Albums /></Route>
  <Route exact path="/albums/gallery/:id"><Gallery /></Route>
  <Route exact path="/"><App /></Route>
  </Switch>
</BrowserRouter>
);
