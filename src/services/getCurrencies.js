export const getCurrencies = async () => {
  const response = await fetch('https://api.vatcomply.com/currencies')
  const currencies = await response.json()

  return getMappedCurrencies({ currencies })
}

export const getMappedCurrencies = ({ currencies }) => {
  const currencyCodes = Object.keys(currencies)

  return currencyCodes.map((code) => ({
    code,
    name: currencies[code]?.name
  }))
}
