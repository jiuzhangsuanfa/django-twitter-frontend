import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router';

function App() {
  return (
    <>
      <div id="loading" className="hidden">
        <CircularProgress />
      </div>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </>
  );
}

export default App;
