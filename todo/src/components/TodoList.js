import React from 'react';
import {setCompleted} from '../actions/index';

const TodoList = (props) =>{
  const handleCompleted =  () => {
      props.dispatch(setCompleted(props.todo.id))
    }

    return(
        <div >
            <div onClick = {handleCompleted}> 
            <p>Title: {props.todo.item}</p>
            <p className = {props.todo.completed? "completed" : ''}>completion: {props.todo.completed? "completed" : "not completed"} </p>
            </div>
        </div>
    )
}

export default TodoList;