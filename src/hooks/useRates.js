import { useState } from 'react'
import { getRates } from '../services/getRates'

export function useRates() {
  const [rates, setRates] = useState(0)

  const updateRates = async ({ baseCurrency }) => {
    try {
      const newRates = await getRates({ baseCurrency })
      setRates(newRates)
    } catch (error) {
      throw new Error('Error getting rates')
    }
  }

  return { rates, updateRates }
}
