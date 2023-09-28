import { useId } from 'react'
import { useForm } from '../hooks/useForm'
import { useCurrencies } from '../hooks/useCurrencies'

export function Form() {
  const id = useId()
  const { inputValue, validateNumberInput } = useForm()
  const { currencies } = useCurrencies()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleInputChange = (event) => {
    const { value } = event.target
    validateNumberInput(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`${id}-amount`}>Amount</label>
      <input
        type="text"
        id={`${id}-amount`}
        value={inputValue}
        onChange={handleInputChange}
      />

      <label htmlFor={`${id}-from-currency`}>From</label>
      <select name="from-currency" id={`${id}-from-currency`}>
        {currencies.map((currency) => (
          <option key={currency.code}>{currency.name}</option>
        ))}
      </select>

      <label htmlFor={`${id}-to-currency`}>To</label>
      <select name="to-currency" id={`${id}-to-currency`}>
        {currencies.map((currency) => (
          <option key={currency.code}>{currency.name}</option>
        ))}
      </select>
    </form>
  )
}
