import React from 'react';
import styles from '../style.module.css';

type PropsType = {
  isDone: boolean;
  title: string;
};
export const Task = (props: PropsType) => {
  const css = props.isDone ? styles.done : '';
  return (
    <div className={styles.task + " " + css}>
      <input type="checkbox" checked={props.isDone} />
      <span>{props.title}</span>
    </div>
  );
};
