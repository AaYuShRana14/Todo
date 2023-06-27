import { useState } from "react";
const NewTask=(props)=>{
    const [task,setTask]=useState('');
    const taskHandler=(event)=>{
        setTask(event.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        props.onAdd(task);
        setTask('');
    }
    return(
        <form onSubmit={submitHandler}>
            <input type="Text" placeholder="Enter new Task" value={task} onChange={taskHandler}></input>
            <button>+</button>
        </form>
    );
}
export default NewTask;