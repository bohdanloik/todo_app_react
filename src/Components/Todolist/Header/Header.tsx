import React from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
type PropsType = {
  title: string
}
function Header(props: PropsType) {
    return (
      <div className="todoList-header">
        <h3 className="todoList-header__title">{props.title}</h3>
        <div className="todoList-newTaskForm">
          <Input placeholder='Name'/>
          <Button text='Add'/>
        </div>
      </div>
    );
  }

  export default Header;