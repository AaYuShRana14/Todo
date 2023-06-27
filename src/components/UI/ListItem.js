const ListItem=(props)=>{
    const deleteHandler=()=>{
        props.deleteTask(props.id);
    }
    return(
        <div>
            <h2>{props.title}</h2>
            <button>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
};
export default ListItem;