import React, { Component } from 'react';
import TodoList from './TodoList';
import TaskForm from './TaskForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Sample Todo App by React. No flux or redux.",
      todos:[
        {
          id: 1,
          taskName: "default task 1",
          completed: false,
          inputDisabled: true
        },
        {
          id: 2,
          taskName: "default task 2",
          completed: false,
          inputDisabled: true
        },
        {
          id: 3,
          taskName: "default task 3",
          completed: true,
          inputDisabled: true
        }
      ]
    };
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleTaskDone = this.handleTaskDone.bind(this);
    this.handleInputBoxClick = this.handleInputBoxClick.bind(this);
    this.handleTaskNameEdit = this.handleTaskNameEdit.bind(this);
  }

  handleTaskSubmit(todo){
    todo.id = Date.now();
    let todos = this.state.todos;
    let newTodos = todos.concat([todo])
    this.setState({todos: newTodos});

    console.log("new task " + todo.taskName + " added")
  }

  handleTaskDelete(todoId) {

    let todos = this.state.todos;

    let targetId = todoId;
    let newTodos = todos.filter(function(todo){
      return todo.id !== targetId
    });
    this.setState({todos: newTodos})
    console.log("task id " + todoId + " is deleted.")
  }

  handleTaskDone(todoId) {

    var todos = this.state.todos;

    var completionOfTodoThatChanged = false
    todos.forEach(function(todo, index, todos) {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
        completionOfTodoThatChanged = todo.completed
      }
    });

    this.setState(todos);
    console.log("task id " + todoId + " completed: " + completionOfTodoThatChanged)
  }

  handleInputBoxClick(todoId) {

    var todos = this.state.todos;

    todos.forEach(function(todo, index, todos) {
      if (todo.id === todoId) {
        todo.inputDisabled = !todo.inputDisabled
      }
    });

    this.setState(todos)
  }

  handleTaskNameEdit(todoId, taskName) {

    var todos = this.state.todos;

    todos.forEach(function(todo, index, todos) {
      if (todo.id === todoId) {
        todo.taskName = taskName
      }
    });

    this.setState(todos)

  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.title}</h2>
        </div>
        <p className="App-intro">
          Add task with the input box below.
        </p>

        <TaskForm onTaskSubmit={this.handleTaskSubmit} />

        <TodoList
          onDeleteButtonClick={this.handleTaskDelete}
          onDoneButtonClick={this.handleTaskDone}
          onInputBoxClick={this.handleInputBoxClick}
          onTaskNameEdit={this.handleTaskNameEdit}
          todos={this.state.todos}
        />

      </div>
    );
  }
}

export default App;