import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'


class App extends React.Component{

  state = {
    todos: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/todos')
    .then(resp => resp.json())
    .then(todoList => {
      this.setState({
        todos: todoList
      })
    })
  }

  handleAdd = (task) => {
    fetch('http://localhost:3000/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: task,
        completed: false
      })
    })
    .then(resp => resp.json())
    .then(newTaskObj => {
      // let newTaskObj = {title: task, completed: false}
      let newArray = [...this.state.todos, newTaskObj]
      this.setState({
        todos: newArray
      })
    })
  }

  handleDelete = (taskToDeleteObj) => {
    fetch(`http://localhost:3000/todos/${taskToDeleteObj.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(emptyObjReturned => {
      if (emptyObjReturned){
        let newTodoArr = this.state.todos.filter((todos) => {
          return todos.id !== taskToDeleteObj.id
        })
        this.setState({
          todos: newTodoArr
        })
      }
    })
  }

  getTaskCompletedChanged = (objNeedChange) => {
    // console.log(objNeedChange)
    const changedObj = {...objNeedChange, completed: !objNeedChange.completed}

    fetch(`http://localhost:3000/todos/${objNeedChange.id}`, {
      method: 'PATCH', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(changedObj)
    })
    .then(resp => resp.json())
    .then(updatedObj => {
      const changedArr = this.state.todos.map((todoObj) => {
          if(todoObj.id === objNeedChange.id){
            return updatedObj
          } else {
            return todoObj
          }
      })
      this.setState({
          todos: changedArr
      })
    })
    // const changedObj = {...objNeedChange, completed: !objNeedChange.completed}
    // console.log(this.state.todos)

    // const changedArr = this.state.todos.map((todoObj) => {
    //   if(todoObj.id === objNeedChange.id){
    //     return changedObj
    //   } else {
    //     return todoObj
    //   }
    // })
    // console.log(changedArr)

    // this.setState({
    //   todos: changedArr
    // })
  }

  render(){
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Header/>
        <ToDoContainer getTaskCompletedChanged={this.getTaskCompletedChanged} getTaskToDelete={this.handleDelete} addTodo={this.handleAdd} todoList={this.state.todos}/>
      </div>
    );
  }
}

export default App;
