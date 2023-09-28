export const convertCurrency = ({
  amountToConvert,
  fromCurrency,
  toCurrency
}) => {
  const amount = parseInt(amountToConvert)
  const from = fromCurrency
  const to = toCurrency

  return ((amount * to) / from).toFixed(2)
}
