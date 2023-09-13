import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

import style from './TaskForm.module.css'

import { ITask } from '../interface/Task';

interface Props {
    btnValue: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>//alterando o state da lista.
    task?: ITask | null;
    handleUpdate?(id: number, titles: string, difficulty: number): void;
}

const TaskForm = ({ btnValue, taskList, setTaskList, task, handleUpdate }: Props) => {
    const[id, setId] = useState<number>(0)
    const[titles, setTitle] = useState<string>("")
    const[difficulty, setDifficulty] = useState<number>(0)
    
    useEffect(() => {
        if(task){
            setId(task.id)
            setTitle(task.titles)
            setDifficulty(task.difficulty)
        }
    }, [task])

    const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

      if(handleUpdate){
        handleUpdate(id, titles, difficulty)
      }else{
        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {id, titles, difficulty}

        setTaskList!([...taskList, newTask])

        setTitle("")
        setDifficulty(0)
      }

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title") {
            setTitle(e.target.value)
        }else {
            setDifficulty(parseInt(e.target.value))
        }
    }

  return (
        <form onSubmit={addTaskHandle} className={style.form}>
            <div className={style.input_container}> 
                <label htmlFor="title">Título</label>
                <input type="text" name='title' placeholder='Titulo da tarefa' onChange={handleChange}
                value={titles}/>
            </div>
            <div className={style.input_container}>
                <label htmlFor="difficulty">Dificuldade</label>
                <input type="text" name='difficulty' placeholder='Dificuldade da tarefa' onChange={handleChange} value={difficulty}/>
            </div>
            <input type="submit" value={btnValue} />
        </form>
  )
}

export default TaskForm