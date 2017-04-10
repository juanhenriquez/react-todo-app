import React from 'react';

// components
import Checkbox from 'material-ui/Checkbox';

// styles
import './Todo.css';

const Todo = (props) => {
  return (
    <div className="todo">
      <Checkbox className="todo_name" label={ props.text + "hola"} />
      <span className="todo__date">Created Mar 21st @ 9:03am</span>
    </div>
  );
};

export default Todo;