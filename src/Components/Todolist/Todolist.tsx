import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import List from './List/List';
function Todolist() {
    return(
      <div className="todoList">
        <Header />
        <List />
        <Footer />
    </div>
    )
}

export default Todolist;