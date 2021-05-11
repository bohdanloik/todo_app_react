import React from 'react';
import styles from '../style.module.css';

type PropsType = {
  isDone: boolean;
  title: string;
};
export const Task = (props: PropsType) => {
  return (
    <div className={styles.task}>
      <input type="checkbox" checked={props.isDone} />
      <span>{props.title}</span>
    </div>
  );
};
