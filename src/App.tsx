import React from 'react';
import Todolist from './Components/Todolist/Todolist'
import styles from './App.module.css';

function App() {

  const tasks = [
    {title:'css',isDone: true},
    {title:'js',isDone: false},
    {title:'html',isDone: true}
  ]
  return (
      <div className = {styles.App}>
        <Todolist />
        <Todolist />
      </div>
  );
}


export default App;
