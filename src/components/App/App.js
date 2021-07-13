import React from 'react';
import './App.css';
import logo from '../../logo.svg';
import BusinessList from '../Business/Business';
import SearchBar from '../SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      < SearchBar />
      < BusinessList />
    </div>
  );
}

export default App;
