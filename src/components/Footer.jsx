import styles from './Footer.module.css'
import { DATE_TIME_FORMAT_OPTIONS } from '../contants'
import { formatDateTime } from '../utils/formatDateTime'
import { useCurrencyStore } from '../hooks/useCurrencyStore'
import { Link } from './Link'

export function Footer() {
  const { baseCurrency, convertTo } = useCurrencyStore()
  const date = formatDateTime(DATE_TIME_FORMAT_OPTIONS)

  return (
    <footer className={styles.footer}>
      <Link>{baseCurrency}</Link>
      {` to `}
      <Link>{convertTo}</Link> conversion — Last updated {date}
    </footer>
  )
}
