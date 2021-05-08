import React from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import './App.css';

function App() {
  return (
      <div className="App">
        <Todolist />
        <Todolist />
      </div>
  );
}
function Todolist() {
  return(
    <div className="todoList">
      <Header />
      <List />
      <Footer />
  </div>
  )
}

export default App;
