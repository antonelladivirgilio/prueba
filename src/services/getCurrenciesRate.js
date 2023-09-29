export const getCurrenciesRate = async ({ fromCurrency, toCurrency }) => {
  const response = await fetch(
    `https://api.vatcomply.com/rates?base=${fromCurrency}&symbols=${fromCurrency},${toCurrency}`
  )

  const { rates } = await response.json()
  return rates
}

export const getRates = async ({ baseCurrency }) => {
  const response = await fetch(
    `https://api.vatcomply.com/rates?base=${baseCurrency}`
  )

  const { rates } = await response.json()

  return rates
}
