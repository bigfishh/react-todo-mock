import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {

  render() {
    // console.log(this.props.todoList)
    let {todoList, addTodo} = this.props


    return (
      <div id="todo-container">
        <NewToDoForm getNewTask={addTodo}/>
        <CompletedContainer getTaskCompletedChanged={this.props.getTaskCompletedChanged} getTaskToDelete={this.props.getTaskToDelete} allTodo={todoList} />
        <IncompleteContainer getTaskCompletedChanged={this.props.getTaskCompletedChanged} getTaskToDelete={this.props.getTaskToDelete} allTodo={todoList} />
      </div>
    );
  }
}
