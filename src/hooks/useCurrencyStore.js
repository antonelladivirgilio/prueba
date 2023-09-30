import { useContext } from 'react'
import { CurrencyContext } from '../contexts/currencyContext'

export function useCurrencyStore() {
  const context = useContext(CurrencyContext)

  if (!context) {
    throw new Error('useCurrencyStore must be used within a CurrencyProvider')
  }

  const { currencyStore, setCurrencyStore } = context

  const updateCurrencyStore = (newValue) => {
    setCurrencyStore({ ...currencyStore, ...newValue })
  }

  return { ...currencyStore, updateCurrencyStore }
}
