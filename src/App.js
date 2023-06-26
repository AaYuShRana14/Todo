import './App.css';
import List from './components/UI/List';
function App() {
  const todoList = [{ id: 't1', task: 'Read novel' },
  {id:'t2',task:'Go to GYM'}
  ];
  return (
    <>
    <List list={todoList}></List>
    </>
  );
}

export default App;
