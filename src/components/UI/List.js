import ListItem from "./ListItem";
import { useState } from "react";
const List = (props) => {
    const [load, setLoad] =useState(false);
    const loadHandler=()=>{
        setLoad(!load);
    } 
    const tasks = (props.list.map((item) => (<ListItem key={item.id} id={item.id} title={item.task} deleteTask={props.deleteTask}></ListItem>)));
    return (
        <>
            {load && tasks}
            <div>
                {!load && <button onClick={loadHandler}>Load</button>}
                {load && <button onClick={loadHandler}>Close</button>}
            </div>
        </>
    );
}
export default List;