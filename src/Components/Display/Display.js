import React from 'react'
import './Display.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Display = ({ todos, removeTodo }) => {
  return todos.map((todo, index) => (
    <div key={index} className="todoContainer">
      <div className="textContainer">{todo.text}</div>
      <div onClick={() => removeTodo(todo.id)} className="iconContainer">
        <DeleteForeverIcon />
        <span>Delete</span>
      </div>
    </div>
  ))
}

export default Display
