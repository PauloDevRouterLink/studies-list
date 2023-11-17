import { FormEvent, ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from './components/Button'
import { List } from './components/List'
import { StopWatch } from './components/StopWatch'
import { Form } from './components/Form'
import { TaskProps } from './@types/TasksProps'
import { createdTask } from './functions/created-task'

import styles from './sass/App.module.scss'
import { finishedTask } from './functions/finished-task'

export const App = () => {
	const [inputTask, setInputTask] = useState<TaskProps>({
		id: uuidv4(),
		task: '',
		time: '00:00',
		selected: false,
		completed: false,
	} as TaskProps)
	const [tasks, setTasks] = useState<TaskProps[] | []>([])
	const [selected, setSelected] = useState<TaskProps | undefined>(
		{} as TaskProps,
	)

	const handleCreatedTask = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		createdTask({ tasks, setTasks, inputTask, setInputTask })
	}

	const handleFinishedTask = () => {
		if (selected) {
			finishedTask({ selected, setSelected, setTasks })
		}
	}

	const handleSelectedTask = (taskSelected: TaskProps) => {
		setSelected(taskSelected)
		setTasks(taskPrevious =>
			taskPrevious.map(task => ({
				...task,
				selected: task.id === taskSelected.id ? true : false,
			})),
		)
	}

	const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setInputTask({
			...inputTask,
			[name]: value,
		})
	}

	return (
		<main className={styles.app__container}>
			<Form.Root onSubmit={handleCreatedTask}>
				<Form.Label htmlFor="task" label="Adicionar nova tarefa">
					<Form.Input
						id="task"
						type="text"
						name="task"
						placeholder="Digite uma nova tarefa"
						value={inputTask.task}
						onChange={handleInputChanged}
					/>
				</Form.Label>
				<Form.Label htmlFor="time" label="Tempo">
					<Form.Input
						id="time"
						type="time"
						name="time"
						step={1}
						max="23:59:59"
						min="0:00:00"
						value={inputTask.time}
						onChange={handleInputChanged}
					/>
				</Form.Label>
				<Button type="submit" label="Adicionar" />
			</Form.Root>

			<List.Root title="Estudos do dia">
				{tasks.map(task => (
					<List.Item
						key={task.id}
						item={task}
						taskSelectedAction={handleSelectedTask}
					/>
				))}
			</List.Root>

			<StopWatch select={selected!} finishTask={handleFinishedTask} />
		</main>
	)
}
