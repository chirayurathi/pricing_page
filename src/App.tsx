import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header width={60}/>
      <Content width={60}/>
      <Footer width={60}/>
    </div>
  );
}

export default App;
