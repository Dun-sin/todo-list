import React, { createRef } from 'react';
import './Input.css';

const Input = ({ newTodoList }) => {
  const todoInput = createRef();

  const addTodoInput = () => {
    const collectedInput = todoInput.current.value;
    if (collectedInput === "") {
    } else {
      newTodoList({
        id: Math.floor(Math.random(0, 1) * 10000),
        text: collectedInput,
      });
      todoInput.current.value = "";
    }
  }


  return (
    <div className="input">
      <form onSubmit={e => e.preventDefault()} className="formContainer">
        <input type="text" ref={todoInput} placeholder="Add a todo" className="inputContainer" />
        <button type="submit" onClick={addTodoInput} className="button">Add</button>
      </form>
    </div>
  )
}

export default Input;
