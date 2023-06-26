const ListItem=(props)=>{
    return(
        <div>
            <h2>{props.title}</h2>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
};
export default ListItem;