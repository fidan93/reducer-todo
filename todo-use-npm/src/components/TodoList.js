import React,{useReducer,useState} from 'react';
import reducer,{initialState} from '../reducers/reducer'
import {setCompleted, setNewItem} from '../actions/action'
import AddTodo from './AddTodo'

const Todo = () => {
const [state,dispatch] = useReducer(reducer,initialState);
const [inputValue,setInputValue] = useState('')
const handleChange = (e) =>{

setInputValue(e.target.value);

}

const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(setNewItem({item:inputValue,id:Date.now(),completed:false}))
}
    return (
        <div>
            <pre>{JSON.stringify(state,null,2)}</pre>
            <form>
                <input type = "text" value={inputValue} onChange={handleChange} />
               
                <button onClick={submitHandler}>Add a new task</button>
            </form>
            
              <AddTodo state = {state} dispatch={dispatch}/>
          
           
        </div>

    )
}
export default Todo;