import React, { Component } from 'react';

export default class NewToDoForm extends Component {

  state = {
    task: ""
  }


  handleNewTask = (evt) => {
    let {value} = evt.target
    this.setState({
      task: value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.getNewTask(this.state.task)
  }

  render() {
    return (
      <div>
        <form className="ui form">
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" placeholder="Title" value={this.state.tasks} onChange={this.handleNewTask}/>
            </div>
            <button onClick={this.handleSubmit} className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
