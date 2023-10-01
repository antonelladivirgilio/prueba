import { useState } from 'react'
import { getRates } from '../services/getRates'

export function useRates() {
  const [rates, setRates] = useState(0)
  const [errorRates, setErrorRates] = useState(false)
  const [loadingRates, setLoadingRates] = useState(false)

  const updateRates = async ({ baseCurrency }) => {
    try {
      setLoadingRates(true)
      setErrorRates(false)
      const newRates = await getRates({ baseCurrency })
      setRates(newRates)
    } catch (error) {
      setErrorRates(true)
    } finally {
      setLoadingRates(false)
    }
  }

  return { rates, updateRates, errorRates, loadingRates }
}
