import NewTask from './components/UI/NewTask';
import List from './components/UI/List';
import { useState } from 'react';
function App() {
  const todoList = [{ id: 't1', task: 'Read novel' },
  { id: 't2', task: 'Go to GYM' }
  ];
  const [list, setList] = useState(todoList);
  const addHandler = (text) => {
    if (text.length > 0) {
      setList([...list, { id: 't' + (list.length + 1), task: text }]);
    }
    console.log(list);
  }
  const deleteTaskHandler=(id)=>{
    console.log(id);
    setList((curList)=>{
      return curList.filter((item)=>{
        return item.id!==id;
      })
    })
    console.log("delete");
  }
  return (
    <>
      <NewTask onAdd={addHandler}></NewTask>
      <List list={list} deleteTask={deleteTaskHandler}></List>
    </>
  );
}

export default App;
