// eslint-disable-next-line
import React, { Component, PropTypes } from 'react';
import App from './App'

class Todo extends Component {

  //cst for constructor
  //sfc for stateless functional component
  constructor(props) {
    super(props);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)

  }

  handleDeleteButtonClick(e){

    //propsを使って下位階層のコンポーネントにfuncを持ってきている。これで、上位階層が（Appクラス）持っているstateを更新

    //this.props.onClickDeleteButton(this.props.id)
    console.log("button clicked")
    var app = new App;
    app.setState({title:"rendered"})
    return "test"
  }


  render() {

    return (
        <div>
          {this.props.taskName} completed : {this.props.completed} id: {this.props.id}
          <button onClick={this.handleDeleteButtonClick}>delete</button>
        </div>
    );
  }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;
