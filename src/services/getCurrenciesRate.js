export const getCurrenciesRate = async ({ fromCurrency, toCurrency }) => {
  const response = await fetch(
    `https://api.vatcomply.com/rates?base=${fromCurrency}&symbols=${fromCurrency},${toCurrency}`
  )

  const { rates } = await response.json()
  return rates
}
