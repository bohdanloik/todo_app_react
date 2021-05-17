import React from 'react';
import styles from './Button.module.css';

type PropsType = {
    text : string;
    type ?: "default" | "danger" | "success" | "info";
}
const Button = (props:PropsType) => {
    let css = styles.button;
    if(props.type === "danger") {
        css = styles.danger;
    }
    if(props.type === "success") {
        css = styles.success;
    }
    if(props.type === "info") {
        css = styles.info;
    }
    return <input type="button" className={styles.button + ' ' + css} value={props.text}/>
}

export default Button;