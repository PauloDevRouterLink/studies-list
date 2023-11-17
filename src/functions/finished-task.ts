import {Dispatch, SetStateAction} from 'react'
import { TaskProps } from "../@types/TasksProps"

type FinishedTaskProps = {
  selected: TaskProps
  setSelected: Dispatch<SetStateAction<TaskProps | undefined>>
  setTasks: Dispatch<SetStateAction<[] | TaskProps[]>>
}

export const finishedTask = ({selected, setSelected, setTasks}: FinishedTaskProps) => {
    setSelected(undefined)
    setTasks(taskPrevious =>
      taskPrevious.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }

        return task
      }),
    )
}