import { useState } from 'react'
import { getRates } from '../services/getCurrenciesRate'

export function useRates() {
  const [rates, setRates] = useState(0)

  const updateRates = async ({ baseCurrency }) => {
    const newRates = await getRates({ baseCurrency })
    console.log({ newRates })
    setRates(newRates)
  }

  return { rates, updateRates }
}
