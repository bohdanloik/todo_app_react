import React from 'react';
import { Task } from './Task/Task';
import styles from './style.module.css'
import { TasksType } from '../../../App';
type PropsType = {
  tasks: Array<TasksType>
}
export const List=(props: PropsType) =>{
    return (
      <div className={styles.list}>
        <Task isDone={props.tasks[0].isDone}  title ={props.tasks[0].title}/>
        <Task isDone={props.tasks[1].isDone}  title ={props.tasks[1].title}/>
        <Task isDone={props.tasks[2].isDone}  title ={props.tasks[2].title}/>

    </div>
    );
}
export default List;