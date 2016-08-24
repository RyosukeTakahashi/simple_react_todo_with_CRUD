// eslint-disable-next-line
import React, { Component, PropTypes } from 'react';

class TodoList extends Component {

  //cst for constructor
  //sfc for stateless functional component
  constructor(props) {
    super(props);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
  }


  handleDeleteButtonClick(todoId){
    // propsを使って下位階層のコンポーネントにfuncを持ってきている。
    // これで、上位階層が（Appクラス）持っているstateを更新
    console.log("Delete button clicked. Task ID: " + todoId)
    this.props.onDeleteButtonClick(todoId)
  }

  handleDoneButtonClick(todoId){
    // propsを使って下位階層のコンポーネントにfuncを持ってきている。
    // これで、上位階層が（Appクラス）持っているstateを更新
    console.log("Done button clicked. Task ID: " + todoId)
    this.props.onDoneButtonClick(todoId)
  }

  render() {

    let todoNodes = this.props.todos.map((todo) => {

      var completeStatus = "Done"
      if(todo.completed === "false"){
        completeStatus = "Done"
      }else{
        completeStatus = "Undone"
      }
      return (
        <div key={todo.id} >
          {todo.taskName} completed: {todo.completed}
          <button onClick={() => {this.handleDeleteButtonClick(todo.id)}}>delete</button>
          <button onClick={() => {this.handleDoneButtonClick(todo.id)}}>{completeStatus}</button>

        </div>
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