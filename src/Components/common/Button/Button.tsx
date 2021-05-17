import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

type PropsType = {
    text : string;
    type ?: "default" | "danger" | "success" | "info";
}
const Button = (props:PropsType) => {
    let css = styles.button;

    let resultCSS = cn({
        [styles.button] : true,
        [styles.danger] : props.type === 'danger',
        [styles.success] : props.type === 'success',
        [styles.info] : props.type === 'info'
    })
    return <input type="button" className={resultCSS} value={props.text}/>
}

export default Button;