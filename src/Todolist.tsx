import React from 'react';
import Footer from './Footer';
import Header from './Header';
import List from './List';
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