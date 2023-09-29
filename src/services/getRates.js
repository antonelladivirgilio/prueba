import { API_GET_RATES_BY_BASE } from '../contants'

export const getRates = async ({ baseCurrency }) => {
  const response = await fetch(`${API_GET_RATES_BY_BASE}${baseCurrency}`)

  const { rates } = await response.json()

  return rates
}
