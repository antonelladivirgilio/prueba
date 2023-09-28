export const getCurrenciesRate = async ({ from, to }) => {
  const response = await fetch(
    `https://api.vatcomply.com/rates?base=${from}&symbols=${from},${to}`
  )

  const { rates } = await response.json()
  return rates
}
