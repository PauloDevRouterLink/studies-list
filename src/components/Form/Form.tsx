import { FormEvent, Component, Dispatch, SetStateAction } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../Button'
import { FormInputField } from './FormInputField'
import { TaskProps } from '../../@types/TasksProps'

import styles from './styles.module.scss'

type FormProps = {
	tasks: TaskProps[]
	setTasks: Dispatch<SetStateAction<TaskProps[]>>
}

/**
 * FEAT: FORMA ANTIGO DE CRIA COMPONENT USANDO CLASS
 */

export default class Form extends Component<FormProps> {
	state = {
		task: '',
		time: '00:00',
	}

	addTask(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		this.props.setTasks([
			...this.props.tasks,
			{
				...this.state,
				selected: false,
				completed: false,
				id: uuidv4(),
			},
		])
		this.setState({ task: '', time: '00:00' })
	}

	render() {
		console.log('Tasks', this.state.task)
		console.log('Time', this.state.time)

		return (
			<form
				className={styles.form__new_task}
				onSubmit={this.addTask.bind(this)}
			>
				<div className={styles.form__new_task__container}>
					<label htmlFor="task">Adicione um novo estudo</label>
					<FormInputField
						type="text"
						name="task"
						id="task"
						placeholder="Digite uma tarefa"
						onChange={event =>
							this.setState({ ...this.state, task: event.target.value })
						}
						value={this.state.task}
						required
					/>
				</div>
				<div className={styles.form__new_task__container}>
					<label htmlFor="time">Tempo</label>
					<FormInputField
						type="time"
						step="1"
						id="time"
						name="time"
						max="23:59:59"
						min="0:00:00"
						onChange={event =>
							this.setState({ ...this.state, time: event.target.value })
						}
						value={this.state.time}
						required
					/>
				</div>
				<div className={styles.form__new_task__button}>
					<Button type="submit" label="Adicionar" />
				</div>
			</form>
		)
	}
}
