import React, { useState } from 'react';
import './List.css'

// Components
import Display from './Display/Display';
import Input from './Input/Input'

const List = () => {
  const [todoLists, setTodoLists] = useState([]);

  const addTodo = (todoList) => {
    const newAddTodoList = [todoList, ...todoLists];
    setTodoLists(newAddTodoList);
  }

  const removeTodoList = (id) => {
    const remove = [...todoLists].filter((todo) => todo.id !== id);
    setTodoLists(remove)
  }

  return (
    <div className="List">
      <Input newTodoList={addTodo} className="inputContainer" />
      <Display todos={todoLists} removeTodo={removeTodoList} />
    </div>
  )
}

export default List
