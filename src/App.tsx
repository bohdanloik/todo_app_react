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

  const tasks1:Array<TasksType> = [
    {id: v1(), title:'TSX', isDone: true},
    {id: v1(), title:'js', isDone: false},
    {id: v1(), title:'html', isDone: true},
    {id: v1(), title:'react', isDone: false}
  ]
  const tasks2:Array<TasksType> = [
    {id: v1(), title:'tea', isDone: true},
    {id: v1(), title:'coffee', isDone: false},
    {id: v1(), title:'milk', isDone: false},
  ]
  const tasks3:Array<TasksType> = [
    {id: v1(), title:'Learn', isDone: true},
    {id: v1(), title:'Dream', isDone: false},
  
  ]
  return (
      <div className = {styles.App}>
        <Todolist tasks={tasks1} title='What to do'/>
        <Todolist tasks={tasks2} title='Shoping'/>
        <Todolist tasks={tasks3} title='Other'/>
      </div>
  );
}


export default App;
