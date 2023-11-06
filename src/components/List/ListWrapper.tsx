import { FC, ReactNode } from 'react'

import styles from './styles.module.scss'

type ListProps = { title: string; children: ReactNode }

export const ListWrapper: FC<ListProps> = ({ title, children }) => {
	return (
		<aside>
			<h2 className={styles.list__title}>{title}</h2>
			<ul>{children}</ul>
		</aside>
	)
}
