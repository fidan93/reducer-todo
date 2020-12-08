import React,{useReducer} from 'react';
import reducer,{initialState} from '../reducers/reducer'
import {setCompleted, setNewItem} from '../actions/action'
import AddTodo from './AddTodo'

const Todo = () => {
const [state,dispatch] = useReducer(reducer,initialState);

const handleChange = (e) =>{

dispatch(setNewItem(e.target.value))
}
// console.log(state)
const submitHandler = (e) =>{

}
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type = "text"  onChange={handleChange} />
               
                <button>Add a new task</button>
            </form>
            {/* {state.map(item=>{
                return  <AddTodo key={item.id} state = {item}/>
            })} */}
           
        </div>

    )
}
export default Todo;