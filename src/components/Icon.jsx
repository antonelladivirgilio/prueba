import { ArrowDown } from './Icons'

export function Icon({ type }) {
  const icons = {
    'arrow-down': <ArrowDown />
  }

  return <>{icons[type]}</>
}
