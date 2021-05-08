import React from 'react';
import Todolist from './Components/Todolist/Todolist'
import styles from './App.module.css';

function App() {
  return (
      <div className = {styles.App}>
        <Todolist />
        <Todolist />
      </div>
  );
}


export default App;
