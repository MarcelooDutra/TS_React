import React from 'react'

import style from './TaskList.module.css';

import { ITask } from '../interface/Task';

interface Props {
    taskList: ITask[];
    handleDetele(id: number): void;
    handleEditTask(task: ITask): void;
}

const TaskList = ({ taskList, handleDetele, handleEditTask }: Props) => {
  return (
    <>
        <h2>Lista de tarefas:</h2>
        { taskList.length > 0 ? (
          taskList.map((task) => (
            <div key={task.id} className={style.task}>
              <div className={style.details}>
                <h4>{task.titles}</h4>
                <p>Dificuldades: {task.difficulty}</p>
              </div>
              <div className={style.actions}>
                <i className="bi bi-pencil" onClick={() => handleEditTask(task)}></i>
                <i className="bi bi-trash" onClick={() => {handleDetele(task.id)}}></i>
              </div>
            </div>
          ))
        ) : (<p>Não tem tarefas cadastradas!</p>)}
    </>
  )
}

export default TaskList