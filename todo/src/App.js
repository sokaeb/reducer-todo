import React from 'react';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <List />
      <ListForm />
    </div>
  );
}

export default App;
