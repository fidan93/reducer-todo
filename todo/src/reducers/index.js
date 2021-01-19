import {ADD_TODO,COMPLETED,CLEAR} from '../actions/index';


export const initialValue = [];

  const reducer = (state,action) =>{
      switch (action.type) {
          case ADD_TODO:
              return ([...state,action.payload])
          case COMPLETED:
              return (state.map(item => { return item.id === action.payload ? {...item,completed:!item.completed}:item}))
          case CLEAR:
              return (state.filter(todo => {
                  return !todo.completed
              }))
          default:
              break;
      }
  }
  export default reducer;