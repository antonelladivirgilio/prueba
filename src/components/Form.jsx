import { useEffect, useId, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useCurrencies } from '../hooks/useCurrencies'
import { getCurrenciesRate } from '../services/getCurrenciesRate'
import { convertCurrency } from '../utils/convertCurrency'

export function Form() {
  const id = useId()
  const { validateNumberInput } = useForm()
  const { currencies } = useCurrencies()

  const [amount, setAmount] = useState('1')
  const [from, setFrom] = useState({
    code: 'USD',
    rate: null
  })

  const [to, setTo] = useState({ code: 'EUR', rate: null })
  const [convertedAmount, setConvertedAmount] = useState(0)

  const handleChangeAmount = (event) => {
    const { value } = event.target
    setAmount(validateNumberInput(value))
  }

  const handleUpdateRates = async (event) => {
    const { name } = event.target
    const currencyCode = event.target.value

    const fromCurrency = name === 'from' ? currencyCode : from.code
    const toCurrency = name === 'to' ? currencyCode : to.code

    const rates = await getCurrenciesRate({ fromCurrency, toCurrency })

    setFrom({
      code: fromCurrency,
      rate: rates[fromCurrency]
    })

    setTo({
      code: toCurrency,
      rate: rates[toCurrency]
    })
  }

  const handleSubmit = async (event) => {
    console.log('handlesubmit')
    event.preventDefault()
  }

  useEffect(() => {
    const convertedAmount = convertCurrency({
      amountToConvert: amount,
      fromCurrency: from.rate,
      toCurrency: to.rate
    })

    setConvertedAmount(convertedAmount)
  }, [amount, from, to])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={`${id}-amount`}>Amount</label>
        <input
          type="text"
          name="amount"
          id={`${id}-amount`}
          value={amount}
          onChange={handleChangeAmount}
        />

        <label htmlFor={`${id}-from-currency`}>From</label>
        <select
          name="from"
          id={`${id}-from-currency`}
          value={from.code}
          onChange={handleUpdateRates}
        >
          {currencies.map((currency) => (
            <option key={`from-${currency.code}`} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>

        <label htmlFor={`${id}-to-currency`}>To</label>
        <select
          name="to"
          id={`${id}-to-currency`}
          value={to.code}
          onChange={handleUpdateRates}
        >
          {currencies.map((currency) => (
            <option key={`to-${currency.code}`} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>

        <button>convertir</button>
      </form>

      <h1>
        {amount} {from?.code} = {convertedAmount} {to?.code}
      </h1>

      <p>
        1 {from?.code} = {to?.rate?.toFixed(2)} {to?.code}
      </p>
    </>
  )
}
