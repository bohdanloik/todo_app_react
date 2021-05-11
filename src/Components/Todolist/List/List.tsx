import React from 'react';
import { Task } from './Task/Task';
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
export default List;