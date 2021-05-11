import React from 'react';

type PropsType = {
    text : string;
}
const Button = (props:PropsType) => {
    return <input type="button" value={props.text}/>
}

export default Button;