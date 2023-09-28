import { useState } from 'react'

export function useForm() {
  const [inputValue, setInputValue] = useState('1')

  const validateNumberInput = (value) => {
    if (value.startsWith(' ')) return
    setInputValue(value.replace(/[^0-9]/g, ''))
  }

  const resetForm = () => {
    setInputValue('')
  }

  return { inputValue, validateNumberInput, resetForm }
}
