
import './App.css';
import { useState } from 'react';
import { Task } from './task.js';



function App() {

  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewtask] = useState("");


   
  const handleChange = (e) =>{
    setNewtask(e.target.value);
    console.log(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }

  };


  //ADDING TASK
  const addTask = () =>{
    if (newTask.trim() === "") return;
    const task = {
      id: todolist.length > 0 ? todolist[todolist.length - 1].id + 1 : 1,
      taskName : newTask,
      completed : false
    }
    setTodoList([...todolist, task]);
  }


  //DELETING TASK
  const deleteTask = (taskId) =>{
    const newTodoList = todolist.filter((task) => task.id !== taskId)
    setTodoList(newTodoList);
  }


  // UPDATING TASK
  const completeTask= (taskId) =>{
  const updatedTodoList =   todolist.map((task) =>{
      if(task.id === taskId ){
        return { ...task, completed: !task.completed};
      }
      else{ 
        return task
      }
    })
    setTodoList(updatedTodoList);
  }


  
  return(
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange} onKeyDown={handleKeyDown}/>
        <button onClick={addTask}>Add Task</button>
      </div>


      <div className="list">
        {todolist.map((task) => (
          <Task
            taskName={task.taskName}
            id={task.id}
            deleteTask={deleteTask}
            completeTask={completeTask}
            isCompleted={task.completed}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
