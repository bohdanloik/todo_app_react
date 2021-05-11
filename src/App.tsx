import React from 'react';
import Todolist from './Components/Todolist/Todolist'
import styles from './App.module.css';
import { v1 } from 'uuid';

export type TasksType = {
  id: string
  title: string
  isDone: boolean
}

function App() {

  const tasks:Array<TasksType> = [
    {id: v1(), title:'TSX', isDone: true},
    {id: v1(), title:'js', isDone: false},
    {id: v1(), title:'html', isDone: true}
  ]
  return (
      <div className = {styles.App}>
        <Todolist tasks={tasks}/>
        <Todolist tasks={tasks}/>
        <Todolist tasks={tasks}/>
      </div>
  );
}


export default App;
