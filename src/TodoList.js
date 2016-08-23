// eslint-disable-next-line
import React, { Component, PropTypes } from 'react';
import Todo from './Todo'

class TodoList extends Component {

  //cst for constructor
  //sfc for stateless functional component

  render() {

    let todoNodes = this.props.todos.map(function(todo) {
      return (
        <Todo
          taskName={todo.taskName}
          completed={todo.completed}
          key={todo.id}
          id={todo.id}
        />
      );
    });

    return (
      <div className="TodoList">
        {todoNodes}
      </div>
    );
  }
}

TodoList.propTypes = {};
TodoList.defaultProps = {};

export default TodoList;