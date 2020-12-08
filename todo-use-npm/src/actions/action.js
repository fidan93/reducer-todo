export const SET_NEW_ITEM = "SET_NEW_ITEM";
export const SET_COMPLETED= "SET_COMPLETED";

export const setNewItem = (item)=>{
   return({type:SET_NEW_ITEM,payload: item}) 
}
export const setCompleted = (completed)=>{
    return({type:SET_COMPLETED,payload: completed}) 
 }
 