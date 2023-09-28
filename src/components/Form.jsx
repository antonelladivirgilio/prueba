import { useEffect, useId, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useCurrencies } from '../hooks/useCurrencies'
import { getCurrenciesRate } from '../services/getCurrenciesRate'

export function Form() {
  const id = useId()
  const { validateNumberInput } = useForm()

  const [amount, setAmount] = useState('1')
  const [from, setFrom] = useState({
    code: 'USD',
    rate: 0
  })
  const [to, setTo] = useState({ code: 'EUR', rate: 0 })
  const [finalAmount, setFinalAmount] = useState(0)
  const { currencies } = useCurrencies()

  const handleChangeAmount = (event) => {
    const { value } = event.target
    setAmount(validateNumberInput(value))
  }

  const handleChangeFrom = (event) => {
    setFrom({
      ...from,
      code: event.target.value
    })
  }

  const handleChangeTo = (event) => {
    setTo({
      ...to,
      code: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //algo

    const updateRates = async () => {
      const rates = await getCurrenciesRate({ from: from.code, to: to.code })
      return rates
    }

    if (from.code !== to.code) {
      updateRates().then((response) => {
        setFrom({
          ...from,
          rate: response[from.code]
        })
        setTo({
          ...to,
          rate: response[to.code]
        })
        setFinalAmount(((amount * from.rate) / to.rate).toFixed(2))
      })
    }
  }

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
          onChange={handleChangeFrom}
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
          onChange={handleChangeTo}
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
        {amount} {from.code} = {finalAmount} {to.code}
      </h1>
      <p>
        1 {from.code} = {to.rate} {to.code}
      </p>
    </>
  )
}
