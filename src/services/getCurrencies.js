export const getCurrencies = async () => {
  const response = await fetch('https://api.vatcomply.com/currencies')
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
