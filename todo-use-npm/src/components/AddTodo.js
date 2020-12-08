export default function AddTodo (props){
    const {state} = props;
    console.log(props)
    return(
            <div>
            <p>taskId: {state.id}</p>
            <p>task: {state.item}</p>
            <p>status: {state.completed? "completed":"not completed"}</p>
            </div>
    )
}