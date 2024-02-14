import { useState } from 'react'
import { Context } from '../../Context/Context'
import Header from '../Header/Header'
import Main from '../Main/Main'

import styles from './styles.module.css'

export const App: React.FC = () => {
	const [currency, setCurrency] = useState('rub')
	const CurrencyProvider = Context.Provider
	return (
		<CurrencyProvider value={{ currency, setCurrency }}>
			<div className={styles.app}>
				<div className={styles.appContainer}>
					<Header />
					<Main />
				</div>
			</div>
		</CurrencyProvider>
	)
}
