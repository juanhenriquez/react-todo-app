import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Todo from './Todo/Todo';
import { List, ListItem } from 'material-ui/List';

class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  constructor (props) {
    super(props);
  }

  render () {
    const { todos } = this.props;

    const renderTodos = () => {
      return todos.map(todo => {
        return (
          <ListItem key={todo.id} children={ <Todo key={todo.id} {...todo} /> }/>
        );
      });
    };

    return (
      <List>
        { renderTodos() }
      </List>
    );
  }
}

export default TodoList;