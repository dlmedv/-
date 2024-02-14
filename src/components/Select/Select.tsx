import { useContext } from 'react'
import { Context } from '../../Context/Context'
import styles from './styles.module.css'

const Select: React.FC = () => {
	const { currency, setCurrency } = useContext(Context)
	return (
		<div className={styles.from}>
			<select
				className={styles.formSelect}
				value={currency}
				onChange={(event) => setCurrency(event.currentTarget.value)}
			>
				<option value='aed'>AED</option>
				<option value='rub'>RUB</option>
				<option value='all'>ALL</option>
				<option value='amd'>AMD</option>
			</select>
		</div>
	)
}

export default Select
