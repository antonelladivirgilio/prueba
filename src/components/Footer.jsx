import styles from './Footer.module.css'
import { Link } from './Link'
import { useCurrencyStore } from '../hooks/useCurrencyStore'

export function Footer() {
  const { baseCurrency, convertTo } = useCurrencyStore()

  return (
    <footer className={styles.footer}>
      <Link>{baseCurrency}</Link>
      {` to `}
      <Link>{convertTo}</Link> conversion — Last updated Dec 15, 2022, 19:17 UTC
    </footer>
  )
}
