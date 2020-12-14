import React from 'react';
import { setCompleted } from '../actions/action';

export default function AddTodo (props){
    const {state,dispatch} = props;

    console.log(state)
   const handleToggle=(id)=>{
       console.log(id)
       dispatch(setCompleted(id))
   }

    return(
        state.map(todo=>{
            console.log(todo)
            return(
            <div key={todo.id}  onClick={handleToggle(todo.id)}>
            <p>taskId: {todo.id}</p>
            <p>task: {todo.item}</p>
            <p>status: {todo.completed? "completed":"not completed"}</p>
            </div>
            )
        })
            
    )
}