import { ButtonHTMLAttributes, FC } from 'react'

import styles from './styles.module.scss'

type ButtonAddProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	label: string
}

export const Button: FC<ButtonAddProps> = ({ label, ...props }) => (
	<button {...props} className={styles.btn}>
		{label}
	</button>
)
