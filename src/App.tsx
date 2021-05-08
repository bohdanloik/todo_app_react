import React from 'react';
import Header from './Header';
import List from './List';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="todoList">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
  );
}


function Footer() {
  return (
  <div className="todoList-footer">
    <button>All</button>
    <button>Completed</button>
    <button>Active</button>
  </div>
  );
}

export default App;
