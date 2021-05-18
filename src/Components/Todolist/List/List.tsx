import React from 'react';
import { Task } from './Task/Task';
import styles from './List.module.css'
import { TasksType } from '../../../App';
type PropsType = {
  tasks: Array<TasksType>
}
function List(props: PropsType) {

  let jsxElement = props.tasks.map((t)=> {
    return <Task key={t.id} isDone={t.isDone}  title ={t.title} />;
  });
    return ( <div className={styles.list}>
      {jsxElement}
    
    </div>
    )
}
export default List;