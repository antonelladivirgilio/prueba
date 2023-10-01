import { useState } from 'react'
import { getRates } from '../services/getRates'

export function useRates() {
  const [rates, setRates] = useState(0)
  const [erroRates, setErroRates] = useState(false)
  const [loadingRates, setLoadingRates] = useState(false)

  const updateRates = async ({ baseCurrency }) => {
    try {
      setLoadingRates(true)
      setErroRates(false)
      const newRates = await getRates({ baseCurrency })
      setRates(newRates)
    } catch (error) {
      setErroRates(true)
    } finally {
      setLoadingRates(false)
    }
  }

  return { rates, updateRates, erroRates, loadingRates }
}
