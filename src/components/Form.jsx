import styles from './Form.module.css'
import { useEffect, useId, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useCurrencies } from '../hooks/useCurrencies'
import { convertCurrency } from '../utils/convertCurrency'
import { useRates } from '../hooks/useRates'
import { Label } from './Label'

export function Form() {
  const id = useId()
  const initialState = {
    amount: 1,
    baseCurrency: 'USD',
    convertTo: 'EUR'
  }

  const { form, validateNumberInput, updateFormValues } = useForm(initialState)
  const { currencies } = useCurrencies()
  const { rates, updateRates } = useRates()

  const [convertedAmount, setConvertedAmount] = useState(0)

  const handleAmountChange = (event) => {
    const { target } = event
    validateNumberInput({ target })
  }

  useEffect(() => {
    const baseCurrency = rates[form.baseCurrency]
    const convertTo = rates[form.convertTo]

    const convertedAmount = convertCurrency({
      amountToConvert: form.amount,
      fromCurrency: baseCurrency,
      toCurrency: convertTo
    })

    setConvertedAmount(convertedAmount)
  }, [form])

  useEffect(() => {
    const baseCurrency = form.baseCurrency
    updateRates({ baseCurrency })
  }, [form.baseCurrency])

  return (
    <>
      <form className={styles.form}>
        <div>
          <Label htmlFor={`${id}-amount`}>Amount</Label>

          <input
            name="amount"
            id={`${id}-amount`}
            value={form.amount}
            onChange={handleAmountChange}
          />
        </div>
        <div>
          <Label htmlFor={`${id}-baseCurrency`}>From</Label>
          <select
            name="baseCurrency"
            id={`${id}-baseCurrency`}
            value={form.baseCurrency}
            onChange={updateFormValues}
          >
            {currencies.map((currency) => (
              <option key={`from-${currency.code}`} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>
        <button>ss</button>
        <div>
          <Label htmlFor={`${id}-convertTo`}>To</Label>
          <select
            name="convertTo"
            id={`${id}-convertTo`}
            value={form.convertTo}
            onChange={updateFormValues}
          >
            {currencies.map((currency) => (
              <option key={`to-${currency.code}`} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {form && (
        <h1>
          {form.amount} {form.baseCurrency} = {convertedAmount} {form.convertTo}
        </h1>
      )}

      <p>
        1 {form.baseCurrency} = {rates[form.convertTo]} {form.convertTo}
      </p>
    </>
  )
}
