import { Component } from 'react'
import { Button } from '../Button'

import styles from './styles.module.scss'

export class Form extends Component {
	render() {
		return (
			<form className={styles.form__new_task}>
				<div className={styles.form__new_task__container}>
					<label htmlFor="task">Adicione um novo estudo</label>
					<input
						type="text"
						name="task"
						id="task"
						placeholder="Digite uma tarefa"
						required
					/>
				</div>
				<div className={styles.form__new_task__container}>
					<label htmlFor="time">Tempo</label>
					<input
						type="time"
						step="1"
						id="time"
						name="time"
						max="01:30:00"
						min="0:00:00"
						required
					/>
				</div>
				<Button text="Adicionar" />
			</form>
		)
	}
}
