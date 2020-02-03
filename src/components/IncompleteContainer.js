import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {

    // When implementing the search bar, consider implementing state here to make it dynamic. 
    // i.e everytime you type in the input field, the ToDos are immediately filtered
    
    state = {
        searchTerm: ""
    }

    // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
    // SearchBarComponent
  
    handleOnChange = (searchText) => {
        this.setState({
          searchTerm: searchText
        })
    }

    // When implementing the search term, consider implementing a function that FILTERs the todos.
    // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

  handleDelete = (titleSentUp) => {
    this.titleSentUp(titleSentUp)
  }


  render() {
    let {allTodo} = this.props
    let uncompletedList = allTodo.filter((listObj) => {
      return listObj.completed === false
    })

    let filteredList = uncompletedList.filter((unTask) => {
      return unTask.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    let showUncompletedTask = filteredList.map(listObj => {
      return <ToDoCard key={listObj.title} getTaskCompletedChanged={this.props.getTaskCompletedChanged} getTaskToDelete={this.props.getTaskToDelete} uncompletedListObj={listObj}/>
    })

    return (
        <div>
            <h1>Incomplete Todos</h1>
            <SearchBarComponent handleOnChange={this.handleOnChange}/>
            {showUncompletedTask}
        </div>
    )
  }
}
