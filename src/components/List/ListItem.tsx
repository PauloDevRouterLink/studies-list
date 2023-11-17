import { FC } from 'react'
import { TaskProps } from '../../@types/TasksProps'

import styles from './styles.module.scss'

type ListItemType = {
	item: TaskProps
	taskSelectedAction: (taskSelected: TaskProps) => void
}

export const ListItem: FC<ListItemType> = ({ item, taskSelectedAction }) => {
	const { task, time, selected, completed } = item

	return (
		<li
			className={`${styles.task__list_item} ${
				selected ? styles.item__selected : ''
			} ${completed ? styles.item__completed : ''}
			`}
			onClick={() => !completed && taskSelectedAction(item)}
		>
			<h3>{task}</h3>
			<span>{time}</span>

			{completed && (
				<span className={styles.concluded} aria-label="task completed" />
			)}
		</li>
	)
}
