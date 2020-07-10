import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import PageOne from './components/Page_one';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
        <HeaderComponent/>
        <PageOne/>
      </>
    </div>
    </BrowserRouter>
  );
}

export default App;
