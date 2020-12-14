import { SET_NEW_ITEM,SET_COMPLETED} from "../actions/action";

export const initialState = [{
        item:'Learn about reducers',
        completed: false,
        id: Date.now(), 
}]


const reducer = (state, action )=>{
    console.log(state)
 switch (action.type) {
    case SET_COMPLETED: 
        return state.map(todo => todo.id===action.payload ? "hi" : "bye")
    case SET_NEW_ITEM: 
       return ([...state,action.payload])
      
// case ADD_TODO:

//     return
    default:
       return state
}
}
export default reducer;