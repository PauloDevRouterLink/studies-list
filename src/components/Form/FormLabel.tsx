import { FC, ReactNode, LabelHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
	label: string
	children: ReactNode
}

const FormLabel: FC<FormLabelProps> = ({ label, children, ...props }) => (
	<div className={styles.form__new_task__container}>
		<label {...props}>{label}</label>
		{children}
	</div>
)

export { FormLabel }
