import React from 'react';
import styles from '../List.module.css';
import cn from 'classnames';

type PropsType = {
  isDone: boolean;
  title: string;
};
export const Task = (props: PropsType) => {
  const css = cn({
    [styles.task] : true,
    [styles.done] : props.isDone
  })
  return (
    <div className={css}>
      <input type="checkbox" checked={props.isDone} />
      <span>{props.title}</span>
    </div>
  );
};
