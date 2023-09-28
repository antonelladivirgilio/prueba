import { useState } from 'react'

export function useForm() {
  const validateNumberInput = (value) => {
    if (value.startsWith(' ')) return

    return value.replace(/[^0-9]/g, '')
  }

  return { validateNumberInput }
}
