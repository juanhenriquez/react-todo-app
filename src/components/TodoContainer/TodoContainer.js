import React, { Component } from 'react';

// components
import TodoList from './TodoList/TodoList';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import { CardMedia, CardTitle, CardText } from 'material-ui/Card';

// styles
import './TodoContainer.css';

class TodoContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    };
  }

  render () {
    const { todos } = this.state;
    return (
      <div className="main-container">
        <div className="main-title">
          <h1 className="main-title__text">Todo App</h1>
        </div>
        <Card className="todo-app-container">
          <TodoList todos={ todos }/>
        </Card>
      </div>
    );
  }
}

export default TodoContainer;