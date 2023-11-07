import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

type ListAsideProps = { title: string; children: ReactNode }

export const ListAside: FC<ListAsideProps> = ({ title, children }) => {
	return (
		<aside className={styles.task__list}>
			<h2>{title}</h2>
			<ul>{children}</ul>
		</aside>
	)
}
