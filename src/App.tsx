import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Loading } from './components/Loading';
import Router from './router';

function App() {
  return (
    <>
      <Loading id="loading"></Loading>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </>
  );
}

export default App;
