import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';

import Header from './components/Header';
import Tabs from './components/Tabs';

import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Header />
      </header>
      <main>
        <nav>
          <Tabs />
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
