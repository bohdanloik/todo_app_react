import React from 'react';
import Button from '../../common/Button/Button';
function Header() {
    return (
      <div className="todoList-header">
        <h3 className="todoList-header__title">What to Learn</h3>
        <div className="todoList-newTaskForm">
          <input type="text" placeholder="title"/>
          <Button />
        </div>
      </div>
    );
  }

  export default Header;