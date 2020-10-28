import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import './App.css';

function App() {
  return (
    <div>
      <div id="loading" className="hidden">
        <CircularProgress />
      </div>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
