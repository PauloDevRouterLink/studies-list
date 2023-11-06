import { Component } from 'react'

import styles from './styles.module.scss'

export class Button extends Component {
	render() {
		return <button className={styles.btn}>Hello</button>
	}
}
