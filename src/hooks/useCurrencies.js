import { useEffect, useState } from 'react'
import { getCurrencies } from '../services/getCurrencies'
import { useCurrencyStore } from './useCurrencyStore'

export function useCurrencies() {
  const { updateCurrencyStore } = useCurrencyStore()
  const [currencies, setCurrencies] = useState([])

  const handleGetCurrencies = async () => {
    const { currencies, currenciesObj } = await getCurrencies()

    updateCurrencyStore({ currenciesObj })
    setCurrencies(currencies)
  }

  useEffect(() => {
    handleGetCurrencies()
  }, [])

  return { currencies, handleGetCurrencies }
}
