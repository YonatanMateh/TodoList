import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskService from "./services/TaskService";
import { ITask } from "./interfaces"

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = async (text: string) => {
    const newTask = await TaskService.addTask(text);
    setTasks([newTask, ...tasks]);
  }

  const toggleDone = async (id: string, isDone: boolean) => {
    const data = await TaskService.toggleDone(id, isDone);
    setTasks(data)
  }

  const deleteTask = async (id: string) => {
    const deletedTask = await TaskService.deleteTask(id);
    const tempTasks = [...tasks];
    const index = tempTasks.findIndex(t => t._id === deletedTask._id);
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  useEffect(() => {
    (async () => {
      const data = await TaskService.getTasks();
      setTasks(data);
    })()
  }, [])

  return (
    <div className="App">
      <Header addTask={addTask} />
      <Tasks
        tasks={tasks}
        toggleDone={toggleDone}
        deleteTask={deleteTask} />
    </div>
  );
}

export default App;
