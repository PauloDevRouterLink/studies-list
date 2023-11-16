import { FormEvent, ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ButtonAdd } from './components/Button'
import { List } from './components/List'
import { StopWatch } from './components/StopWatch'
import { Form } from './components/Form'
import { TaskProps } from './@types/TasksProps'
// import FormHero from './components/Form/Form'

import styles from './sass/App.module.scss'

export const App = () => {
	const [task, setTask] = useState<TaskProps>({} as TaskProps)
	const [tasks, setTasks] = useState<TaskProps[] | []>([])
	const [selected, setSelected] = useState<TaskProps>()

	console.log(selected)

	const handleSelectedTask = (taskSelected: TaskProps) => {
		setSelected(taskSelected)
	}

	const handleCreatedTask = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const infoCreatedTask = {
			id: uuidv4(),
			task: task.task,
			time: task.time,
			completed: false,
			selected: false,
		}

		setTasks([...tasks, infoCreatedTask])
		setTask({
			id: infoCreatedTask.id,
			task: '',
			time: '00:00',
			selected: infoCreatedTask.selected,
			completed: infoCreatedTask.completed,
		})
	}

	const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setTask({
			...task,
			[name]: value,
		})

		console.log(task)
	}

	return (
		<main className={styles.app__container}>
			{/* <FormHero tasks={tasks} setTasks={setTasks} /> */}

			<Form.Root onSubmit={handleCreatedTask}>
				<Form.Label htmlFor="task" label="Adicionar nova tarefa">
					<Form.Input
						id="task"
						type="text"
						name="task"
						placeholder="Digite uma nova tarefa"
						value={task.task}
						onChange={handleInputChanged}
					/>
				</Form.Label>
				<Form.Label htmlFor="time" label="Tempo">
					<Form.Input
						id="time"
						type="time"
						name="time"
						step={1}
						max="07:30:00"
						min="0:00:00"
						value={task.time}
						onChange={handleInputChanged}
					/>
				</Form.Label>
				<ButtonAdd type="submit" label="Adicionar" />
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

			<StopWatch />
		</main>
	)
}
