import { FC } from 'react'

import styles from './styles.module.scss'

type ListItemProps = {
	task: string
	time: string
}

type ListItemType = { item: ListItemProps }

export const ListItem: FC<ListItemType> = ({ item }) => {
	const { task, time } = item

	return (
		<li className={styles.task__list_item}>
			<h3>{task}</h3>
			<span>{time}</span>
		</li>
	)
}
