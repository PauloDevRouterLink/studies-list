import { Component } from 'react'

import styles from './styles.module.scss'

type ButtonProps = { text: string }
export class Button extends Component<ButtonProps> {
	render() {
		return <button className={styles.btn}>{this.props.text}</button>
	}
}
