import React, { useReducer, useState } from 'react';
import reducer, {initialValue} from '../reducers/index'
import {addTodo,clear} from '../actions/index';
import TodoList from './TodoList'

const TodoForm = () => {
const [state,dispatch] = useReducer(reducer,initialValue)
const [inputValue,setInputValue] = useState("");

const handleChange = (e) => {
setInputValue(e.target.value)
}
const handleAddTodo = (e) => {
e.preventDefault()

dispatch(addTodo({item:inputValue,completed: false, id: Date.now()}))
setInputValue("")
}

const clearCompleted = () => {
    dispatch(clear())
}
    return(
        <div>
        <form onSubmit = {handleAddTodo}>
            <input type = 'text' name = "add" value = {inputValue} onChange = {handleChange} />
            <button>Add item</button>
        </form>
        {state.map(todo=>{
            return <TodoList key={todo.id} todo = {todo} dispatch= {dispatch} />
        })}
        <button onClick={clearCompleted}>Clear completed</button>
        </div>

    )
}

export default TodoForm;