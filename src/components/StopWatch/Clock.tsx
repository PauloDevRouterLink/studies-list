import styles from './styles.module.scss'

export const Clock = () => {
	return (
		<>
			<span className={styles.clock__number}>0</span>
			<span className={styles.clock__number}>0</span>
			<span className={styles.clock__division}>:</span>
			<span className={styles.clock__number}>0</span>
			<span className={styles.clock__number}>0</span>
		</>
	)
}
