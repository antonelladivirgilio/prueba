import { useEffect, useState } from 'react'
import { getCurrencies } from '../services/getCurrencies'

export function useCurrencies() {
  const [currencies, setCurrencies] = useState([])
  const [currenciesCodes, setCurrenciesCodes] = useState('')

  const handleGetCurrencies = async () => {
    const { currencies, currencyCodes } = await getCurrencies()

    setCurrencies(currencies)
    setCurrenciesCodes(currencyCodes)
  }

  useEffect(() => {
    handleGetCurrencies()
  }, [])

  return { currencies, currenciesCodes, handleGetCurrencies }
}
