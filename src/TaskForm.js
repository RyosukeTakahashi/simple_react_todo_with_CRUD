// eslint-disable-next-line
import React, { Component, PropTypes } from 'react';

class TaskForm extends Component {
  
  //cst for constructor
  //sfc for stateless functional component

  constructor(props) {
    super(props);
    this.state = {taskName:''};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputBoxChange = this.handleInputBoxChange.bind(this)
  }

  handleInputBoxChange(e){
    this.setState({taskName: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    let taskName = this.state.taskName.trim();
    if(!taskName){
      return
    }
    //propsを使って下位階層のコンポーネントにfuncを持ってきている。これで、上位階層が（Appクラス）持っているstateを更新
    this.props.onTaskSubmit({
      taskName: taskName,
      id: Date.now,
      completed: "false"
    });
    this.setState({taskName:''});
    console.log('handleSubmit in taskform.js completed')

  }

  render() {
    return (
      <form className="TaskForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="New Task name"
          value={this.state.taskName}
          onChange={this.handleInputBoxChange}
        />
        <input type="submit" value="Add Task"/>
      </form>
    );
  }
}

//TaskForm.propTypes = {};
//TaskForm.defaultProps = {};

export default TaskForm;
