export const ADD_TODO = "ADD_TODO";
export const COMPLETED = "COMPLETED";
export const CLEAR = "CLEAR";

export const addTodo = (title) => {
    return ({type:ADD_TODO,payload:title})
}

export const setCompleted = (bool) => {
    return ({type: COMPLETED, payload:bool})
}

export const clear = () => {
    return ({type: CLEAR})
}