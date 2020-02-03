import React from 'react'

const ToDoCard = (props) => {

  let {uncompletedListObj, completedListObj} = props

  // console.log(uncompletedListObj)

  const showTitle = () => {
    if (uncompletedListObj){
      return uncompletedListObj.title
    } else {
      return completedListObj.title
    }
  }

  const showButton = () => {
    if (uncompletedListObj){
      return "Complete"
    } else {
      return "Incomplete"
    }
  }

  const color = () => {
    if (uncompletedListObj){
      return "blue"
    } else {
      return "orange"
    }
  }

  const handleDelete = () => {
    if (uncompletedListObj){
      props.getTaskToDelete(uncompletedListObj)
    } else {
      props.getTaskToDelete(completedListObj)
    }
  }

  const handleChange = () => {
    // console.log(completedListObj)
    if (uncompletedListObj){
      props.getTaskCompletedChanged(uncompletedListObj)
    } else {
      props.getTaskCompletedChanged(completedListObj)
    }
  }


    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{showTitle()}</div>
          {/* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete 
            */}
          <button onClick={handleChange} className={`ui button ${color()}`}>{showButton()}</button>
          <button onClick={handleDelete} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard