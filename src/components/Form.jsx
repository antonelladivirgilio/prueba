import styles from './Form.module.css'
import { useEffect, useId, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useCurrencies } from '../hooks/useCurrencies'
import { convertCurrency } from '../utils/convertCurrency'
import { useRates } from '../hooks/useRates'
import { Label } from './Label'
import { Select } from './Select'
import { Input } from './Input'
import { SwapCurrency } from './Icons'
import { Button } from './Button'
import { Footer } from './Footer'
import { useCurrencyStore } from '../hooks/useCurrencyStore'

export function Form() {
  const id = useId()
  const { amount, baseCurrency, convertTo, updateCurrencyStore } =
    useCurrencyStore()
  const initialState = {
    amount,
    baseCurrency,
    convertTo
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
    const updatedState = {
      amount: form.amount,
      baseCurrency: form.baseCurrency,
      convertTo: form.convertTo
    }

    updateCurrencyStore({ ...updatedState })

    const baseCurrencyValue = rates?.[form.baseCurrency]
    const convertToValue = rates?.[form.convertTo]

    const convertedAmount = convertCurrency({
      amountToConvert: form.amount,
      fromCurrency: baseCurrencyValue,
      toCurrency: convertToValue
    })

    setConvertedAmount(convertedAmount)
  }, [form])

  useEffect(() => {
    const baseCurrency = form.baseCurrency
    updateRates({ baseCurrency })
  }, [form.baseCurrency])

  const handleSwap = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <form className={styles.form}>
        <div>
          <Label htmlFor={`${id}-amount`}>Amount</Label>
          <Input
            name="amount"
            id={`${id}-amount`}
            value={form.amount}
            onChange={handleAmountChange}
          ></Input>
        </div>

        <div>
          <Label htmlFor={`${id}-baseCurrency`}>From</Label>
          <Select
            id={`${id}-baseCurrency`}
            name="baseCurrency"
            value={form.baseCurrency}
            onChange={updateFormValues}
          >
            {currencies.map((currency) => (
              <option key={`from-${currency.code}`} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </Select>
        </div>

        <Button onClick={handleSwap}>
          <SwapCurrency />
        </Button>

        <div>
          <Label htmlFor={`${id}-convertTo`}>To</Label>
          <Select
            id={`${id}-convertTo`}
            name="convertTo"
            value={form.convertTo}
            onChange={updateFormValues}
          >
            {currencies.map((currency) => (
              <option key={`to-${currency.code}`} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </Select>
        </div>
      </form>

      <section className={styles.form__result}>
        <div>
          {form && (
            <p className={styles.form__amount}>
              {form.amount} {form.baseCurrency} = {convertedAmount}{' '}
              {form.convertTo}
            </p>
          )}
          <p className={styles.form__rate}>
            1 {form.baseCurrency} = {rates?.[form.convertTo]} {form.convertTo}
          </p>
        </div>
        <div className={styles.form__info}>
          <p className={styles.form__popover}>
            We use the mid-market rate for our Converter. This is for
            informational purposes only. You won’t receive this rate when
            sending money.
          </p>
          <Footer />
        </div>
      </section>
    </>
  )
}
