import React from 'react';
import Button from '../../common/Button/Button';

function Footer() {
    return (
    <div className="todoList-footer">
      <Button text='Add' type='info' />
      <Button text='Active' type='danger'/>
      <Button text='Reset' type='success'/>
    </div>
    );
  }

export default Footer;