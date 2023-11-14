import { FC, ReactNode, FormHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type FormRootProps = FormHTMLAttributes<HTMLFormElement> & {
	children: ReactNode
}

export const FormRoot: FC<FormRootProps> = ({ children, ...props }) => (
	<form {...props} className={styles.form__new_task}>
		{children}
	</form>
)
