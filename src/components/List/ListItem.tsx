import { FC } from 'react'
import { TaskProps } from '../../@types/TasksProps'

import styles from './styles.module.scss'

type ListItemType = { item: TaskProps }

export const ListItem: FC<ListItemType> = ({ item }) => {
	const { task, time } = item

	return (
		<li className={styles.task__list_item}>
			<h3>{task}</h3>
			<span>{time}</span>
		</li>
	)
}
