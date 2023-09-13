import React, {useState} from 'react';

//components
import Header from './components/Header';
import Footer from './components/Footer';

// css
import style from './App.module.css';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//interface
import { ITask } from './interface/Task';

function App() {

  const[taskList, setTaskList] = useState<ITask[]>([])

  const[taskUpdate, setTaskUpdate] = useState<ITask | null>(null);
  
  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => {
      return task.id !== id;
    }))
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if(display) {
      modal!.classList.remove("hide")
    }else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask) :void => {
    hideOrShowModal(true);
    setTaskUpdate(task);
  }

  const updateTask = (id: number, titles: string, difficulty: number) => {

    const updatedTask: ITask = {id, titles, difficulty}

    const updatedItems = taskList.map((task) =>{
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems)

    hideOrShowModal(false)
  }

  return (
    <div>
      <Modal children={<TaskForm btnValue='Editar tarefa' taskList={taskList} task={taskUpdate} handleUpdate={updateTask}/>} />
      <Header />
      <main className={style.main}>
        <h2>O que você vai fazer?</h2>
        <div>
          <TaskForm btnValue="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <TaskList taskList={taskList} handleDetele={deleteTask} handleEditTask={editTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
