import { useEffect, useState } from 'react'
import { getCurrencies } from '../services/getCurrencies'
import { useCurrencyStore } from './useCurrencyStore'

export function useCurrencies() {
  const { updateCurrencyStore } = useCurrencyStore()
  const [currencies, setCurrencies] = useState([])
  const [errorCurrencies, setErrorCurrencies] = useState(false)
  const [loadingCurrencies, setLoadingCurrencies] = useState(false)

  const handleGetCurrencies = async () => {
    try {
      setLoadingCurrencies(true)
      setErrorCurrencies(false)
      const { currencies, currenciesObj } = await getCurrencies()

      updateCurrencyStore({ currenciesObj })
      setCurrencies(currencies)
    } catch (error) {
      setErrorCurrencies(true)
    } finally {
      setLoadingCurrencies(false)
    }
  }

  useEffect(() => {
    handleGetCurrencies()
  }, [])

  return { currencies, handleGetCurrencies, errorCurrencies, loadingCurrencies }
}
