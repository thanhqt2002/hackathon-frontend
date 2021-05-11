import { useState, useEffect} from 'react'
import Header from './components/Header'
import Body from './components/Body'
const App = ()=>{
  const [key, setKey] = useState('home');
  const fake_tasks = [
    {
      id:0,
      title:"Problem 1",
      content:"abc",
      subtasks:1,
    },
    {
      id:1,
      title:"Problem 2",
      content:"ABC",
      subtasks:2,
    },
    {
      id:2,
      title:"Problem 3",
      content:"ABC",
      subtasks:3,
    },
    {
      id:3,
      title:"Problem 4",
      content:"ABC",
      subtasks:4,
    },
    {
      id:4,
      title:"Problem 5",
      content:"ABC",
      subtasks:5,
    },
    {
      id:5,
      title:"Problem 6",
      content:"ABC",
      subtasks:5,
    },
    {
      id:6,
      title:"Problem 7",
      content:"ABC",
      subtasks:5,
    },
    {
      id:7,
      title:"Problem 8",
      content:"ABC",
      subtasks:5,
    },
    {
      id:8,
      title:"Problem 9",
      content:"ABC",
      subtasks:5,
    },
  ]
  const [tasks, setTasks] = useState([...fake_tasks])
  return (
    <>
    <Header/>
    <Body tasks={tasks}/>
    </>
  );
}

export default App
