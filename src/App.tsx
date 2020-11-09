import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { LoadingComponent } from './components/Loading';
import Router from './router';

function App() {
  return (
    <>
      <LoadingComponent id="loading"></LoadingComponent>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </>
  );
}

export default App;
