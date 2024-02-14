import { createContext } from 'react'

export const Context = createContext({
	currency: '',
	setCurrency: (string: string) => {},
})
