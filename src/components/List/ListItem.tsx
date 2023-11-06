import { FC } from 'react'

type ListItemProps = {
	task: string
	time: string
}

type ListItemType = {
	item: ListItemProps
}

export const ListItem: FC<ListItemType> = ({ item }) => {
	const { task, time } = item

	return (
		<li>
			<h3>{task}</h3>
			<span>{time}</span>
		</li>
	)
}
