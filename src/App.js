import React from 'react';
import {CityContextProvider}  from './contexts/CityContext';
import './App.css';
import Header from './components/Header';
import Api from "./components/Api";


function App() {
  return (
    <div>
      <CityContextProvider>
      <Header />
      <Api />
      </CityContextProvider>
      
    </div>
  );
}

export default App;
