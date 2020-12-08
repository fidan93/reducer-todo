import { SET_NEW_ITEM,SET_COMPLETED} from "../actions/action";

export const initialState = [
{
        item: 'Learn about reducers',
        completed: false,
        id: Date.now(), 
}

]

const reducer = (state, action )=>{
    console.log(state)
switch (action.type) {
    case SET_COMPLETED: 
        return ({...state,completed: action.payload})
    case SET_NEW_ITEM:
       const newItem = state.map(i=>{
           return({...state,item: action.payload})
       })
       return newItem
       
// case ADD_TODO:

//     return
    default:
       return state
}
}
export default reducer;