import { Button } from '../Button'
import { Clock } from './Clock'
import styles from './styles.module.scss'

export const StopWatch = () => {
	return (
		<div className={styles.stopwatch}>
			<p>Escolha seu card e inicie seu cronômetro</p>

			<div className={styles.stopwatch__clock}>
				<Clock />
			</div>

			<Button text="Começar" />
		</div>
	)
}
