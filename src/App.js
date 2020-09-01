import React from 'react';
import AppBarBottom from './components/AppBarBottom'
import AppBarTop from './components/AppBarTop'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBarTop />
        <AppBarBottom />
        </header>
    </div>
  );
}
