import { API_GET_RATES_BY_BASE } from '../contants'

export const getRates = async ({ baseCurrency }) => {
  try {
    const response = await fetch(`${API_GET_RATES_BY_BASE}${baseCurrency}`)
    const { rates } = await response.json()

    return rates
  } catch (error) {
    throw new Error('Error getting rates')
  }
}
