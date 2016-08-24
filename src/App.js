import React, { Component } from 'react';
import TodoList from './TodoList';
import TaskForm from './TaskForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Welcome to React Ryo! This is the start!",
      todos:[
        {
          id: 1,
          taskName: "default task 1",
          completed: "false"
        },
        {
          id: 2,
          taskName: "default task 2",
          completed: "false"
        },
        {
          id: 3,
          taskName: "default task 3",
          completed: "true"
        }
      ]
    };
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleTaskDone = this.handleTaskDone.bind(this);
  }

  handleTaskSubmit(todo){
    todo.id = Date.now();
    let todos = this.state.todos;
    let newTodos = todos.concat([todo])
    this.setState({todos: newTodos});
  }

  handleTaskDelete(todoId) {

    let todos = this.state.todos;

    let targetId = todoId;
    let newTodos = todos.filter(function(todo){
      return todo.id !== targetId
    });
    this.setState({todos: newTodos})
    console.log("task with id" + todoId + " is deleted.")
  }

  handleTaskDone(todoId) {

    var todos = this.state.todos;

    todos.forEach(function(todo, index, todos) {
      if (todo.id === todoId) {
        if(todo.completed === "false") {
          todo.completed = "true"
        }else if(todo.completed === "true"){
          todo.completed = "false"
        }
      }
    });

    this.setState(todos);
    console.log("task with id" + todoId + " is done.")
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.title}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. {this.props.name}
        </p>

        <TaskForm onTaskSubmit={this.handleTaskSubmit} />

        <TodoList
          onDeleteButtonClick={this.handleTaskDelete}
          onDoneButtonClick={this.handleTaskDone}
          todos={this.state.todos}
        />

      </div>
    );
  }
}

export default App;