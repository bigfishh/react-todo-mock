import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {


    let {allTodo} = props
    // console.log(allTodo)
    let doneTasks = allTodo.filter((listObj) => {
        return listObj.completed
    })

    let showDoneTask = doneTasks.map((task) => {
        return <ToDoCard key={task.title} getTaskCompletedChanged={props.getTaskCompletedChanged} completedListObj={task}/>
    })


    return (
        <div>
            <h1>Completed Todos</h1>
            {showDoneTask}
        </div>
    )
}

export default CompletedContainer