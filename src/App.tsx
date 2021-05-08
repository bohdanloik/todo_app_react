import React from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
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

export default App;
