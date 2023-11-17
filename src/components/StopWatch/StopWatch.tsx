import { FC, useEffect, useState } from 'react'
import { timeForSeconds } from '../../utils/time'
import { Button } from '../Button'
import { Clock } from './Clock'
import styles from './styles.module.scss'
import { TaskProps } from '../../@types/TasksProps'

type StopWatchProps = { select: TaskProps; finishTask: () => void }

export const StopWatch: FC<StopWatchProps> = ({ select, finishTask }) => {
	const [time, setTime] = useState<number>()

	useEffect(() => {
		if (select?.time) {
			setTime(timeForSeconds(select.time))
		}
	}, [select])

	const handleRegressive = (count: number = 0) => {
		setTimeout(() => {
			if (count > 0) {
				setTime(count - 1)
				return handleRegressive(count - 1)
			}
			finishTask()
		}, 1000)
	}

	return (
		<div className={styles.stopwatch}>
			<p>Escolha seu card e inicie seu cronômetro</p>

			<div className={styles.stopwatch__clock}>
				<Clock time={time!} />
			</div>

			<Button label="Começar" onClick={() => handleRegressive(time)} />
		</div>
	)
}
