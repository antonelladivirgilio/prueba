import { API_GET_CURRENCIES } from '../contants'

export const getCurrencies = async () => {
  const response = await fetch(API_GET_CURRENCIES)
  const currencyList = await response.json()

  return getMappedCurrencies({ currencyList })
}

export const getMappedCurrencies = ({ currencyList }) => {
  const codes = Object.keys(currencyList)

  const currencies = codes.map((code) => ({
    code,
    name: currencyList[code]?.name
  }))

  return { currencies, codes }
}
