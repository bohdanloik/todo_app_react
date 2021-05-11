import React from 'react';
import styles from './style.module.css'
function List() {
    return (
      <div className={styles.list}>
        <Task isDone={false}  title ='Css'/>
        <Task isDone={true}  title ='Html'/>
        <Task isDone={true}  title ='Js'/>
    </div>
    );
}
type PropsType = {
  isDone: boolean;
  title: string;
}
const Task = (props: PropsType) => {
  return (
    <div className={styles.task}>
      <input type="checkbox" checked={props.isDone}/>
      <span>{props.title}</span>
    </div>
  )
}
export default List;