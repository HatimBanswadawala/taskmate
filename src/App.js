import './App.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';

function App() {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [updatedTask, setUpdatedTask] = useState({});

  useEffect(()=>{
    localStorage.setItem("tasklist",JSON.stringify(taskList))
  }, [taskList]);


  return (
    <div className="App">
      <Header/>
      <AddTask taskList = {taskList} 
               setTaskList={setTaskList}
               updatedTask={updatedTask}
               setUpdatedTask={setUpdatedTask} />
      <ShowTask taskList = {taskList} 
                setTaskList={setTaskList}
                updatedTask={updatedTask}
                setUpdatedTask={setUpdatedTask} />
      <Footer/>
    </div>
  );
}

export default App;
