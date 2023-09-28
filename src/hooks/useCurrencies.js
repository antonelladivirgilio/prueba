import { useEffect, useState } from 'react'
import { getCurrencies } from '../services/getCurrencies'

export function useCurrencies() {
  const [currencies, setCurrencies] = useState([])

  const handleGetCurrencies = async () => {
    const currencies = await getCurrencies()
    setCurrencies(currencies)
  }

  useEffect(() => {
    handleGetCurrencies()
  }, [])

  return { currencies, handleGetCurrencies }
}
