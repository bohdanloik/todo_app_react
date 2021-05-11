import React from 'react';
import Button from '../../common/Button/Button';

function Footer() {
    return (
    <div className="todoList-footer">
      <Button text='Add'/>
      <Button text='Active'/>
      <Button text='Reset'/>
    </div>
    );
  }

export default Footer;