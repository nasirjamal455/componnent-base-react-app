import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
    <Dinner dishname="fish" anotherdish= "biryani" />
    <Dinner dishname="karahi" anotherdish= "amlait" />
    <Dinner dishname="mutton" anotherdish= "nihari" />

    </div>
  )
}

export default App;
