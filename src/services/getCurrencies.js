import { API_GET_CURRENCIES } from '../contants'

export const getCurrencies = async () => {
  try {
    const response = await fetch(API_GET_CURRENCIES)
    const currenciesObj = await response.json()
    const { currencies } = getMappedCurrencies({ currencyList: currenciesObj })

    return { currencies, currenciesObj }
  } catch (error) {
    throw new Error('Error getting currencies')
  }
}

export const getMappedCurrencies = ({ currencyList }) => {
  const codes = Object.keys(currencyList)

  const currencies = codes.map((code) => ({
    code,
    name: currencyList[code]?.name
  }))

  return { currencies, codes }
}
