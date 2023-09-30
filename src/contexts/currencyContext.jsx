import { createContext, useState } from 'react'

export const CurrencyContext = createContext(null)

export const CurrencyProvider = ({ children }) => {
  const initialState = {
    amount: 1,
    baseCurrency: 'USD',
    convertTo: 'EUR',
    currencies: {}
  }

  const [currencyStore, setCurrencyStore] = useState(initialState)

  return (
    <CurrencyContext.Provider value={{ currencyStore, setCurrencyStore }}>
      {children}
    </CurrencyContext.Provider>
  )
}
