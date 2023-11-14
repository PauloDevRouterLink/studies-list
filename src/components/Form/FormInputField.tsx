import { FC, InputHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type FormInputFieldProps = InputHTMLAttributes<HTMLInputElement>

export const FormInputField: FC<FormInputFieldProps> = ({ ...props }) => (
	<input {...props} className={styles.input__field} />
)
