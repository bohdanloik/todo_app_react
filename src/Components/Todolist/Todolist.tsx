import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import List from './List/List';
import style from './style.module.css'
function Todolist() {
    return(
      <div className={style.todoList}>
        <Header />
        <List />
        <Footer />
    </div>
    )
}

export default Todolist;