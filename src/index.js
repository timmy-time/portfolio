import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Donate from "./components/Donate";


ReactDOM.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route exact path="/" element={<App />}/>
      <Route path="/donate" element={<Donate />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
