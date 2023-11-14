import { ButtonHTMLAttributes, Component, FC } from 'react'

import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { text: string }
export class Button extends Component<ButtonProps> {
	render() {
		const { text } = this.props

		return <button className={styles.btn}>{text}</button>
	}
}

type ButtonAddProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	label: string
}

export const ButtonAdd: FC<ButtonAddProps> = ({ label, ...props }) => {
	return (
		<button {...props} className={styles.btn}>
			{label}
		</button>
	)
}
