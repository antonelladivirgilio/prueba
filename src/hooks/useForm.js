import { useState } from 'react'

export function useForm(initialState) {
  const [form, setForm] = useState(initialState)

  const validateNumberInput = ({ target }) => {
    const { name, value } = target
    if (value.startsWith(' ')) return

    setForm({
      ...form,
      [name]: value.replace(/[^0-9]/g, '')
    })
  }

  const updateFormValues = ({ name, value }) => {
    setForm((formValues) => ({ ...formValues, [name]: value }))
  }

  return { form, validateNumberInput, updateFormValues }
}
