import { FC } from 'react'
import styles from './styles.module.scss'

export const Clock: FC<{ time: number }> = ({ time = 0 }) => {
	const minutes = Math.floor(time / 60)
	const seconds = time % 60
	const [minutesDozens, minutesUnits] = String(minutes).padStart(2, '0')
	const [secondsDozens, secondsUnits] = String(seconds).padStart(2, '0')

	return (
		<>
			<span className={styles.clock__number}>{minutesDozens}</span>
			<span className={styles.clock__number}>{minutesUnits}</span>
			<span className={styles.clock__division}>:</span>
			<span className={styles.clock__number}>{secondsDozens}</span>
			<span className={styles.clock__number}>{secondsUnits}</span>
		</>
	)
}
