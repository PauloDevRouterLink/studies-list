import { FC } from 'react'
import { TaskProps } from '../../@types/TasksProps'

import styles from './styles.module.scss'

type ListItemType = {
	item: TaskProps
	taskSelectedAction: (taskSelected: TaskProps) => void
}

export const ListItem: FC<ListItemType> = ({ item, taskSelectedAction }) => {
	const { id, task, time, completed, selected } = item

	console.log(id)
	console.log(completed)
	console.log(selected)
	console.log(item)

	return (
		<li
			className={styles.task__list_item}
			onClick={() => taskSelectedAction(item)}
		>
			<h3>{task}</h3>
			<span>{time}</span>
		</li>
	)
}
