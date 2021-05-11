import React from 'react';
import styles from './style.module.css';

type PropsType = {
    text : string;
}
const Button = (props:PropsType) => {
    return <input type="button" className={styles.button} value={props.text}/>
}

export default Button;