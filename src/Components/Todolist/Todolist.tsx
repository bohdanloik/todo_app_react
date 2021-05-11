import React from 'react';
import { TasksType } from '../../App';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import List from './List/List';
import style from './style.module.css'

type PropsType = {
  tasks: Array<TasksType>
  title: string
}

export const Todolist = (props: PropsType) => {
    return(
      <div className={style.todoList}>
        <Header title={props.title}/>
        <List tasks={props.tasks}/>
        <Footer />
    </div>
    )
}

export default Todolist;