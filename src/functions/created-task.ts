import {Dispatch, SetStateAction} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TaskProps } from '../@types/TasksProps'

type CreatedTaskProps = {
  inputTask: TaskProps
  tasks: [] | TaskProps[]
  setTasks: Dispatch<SetStateAction<[] | TaskProps[]>>
  setInputTask: Dispatch<SetStateAction<TaskProps>>
}


export const createdTask = ({tasks, setTasks, inputTask, setInputTask}: CreatedTaskProps) => {
  const infoCreatedTask = {
    id: uuidv4(),
    task: inputTask.task,
    time: inputTask.time,
    completed: false,
    selected: false,
  }

  setTasks([...tasks, infoCreatedTask])
  setInputTask({
    id: infoCreatedTask.id,
    task: '',
    time: '00:00',
    selected: infoCreatedTask.selected,
    completed: infoCreatedTask.completed,
  })
}