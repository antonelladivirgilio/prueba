import styles from './Footer.module.css'
import { Link } from './Link'

export function Footer({ baseCurrency = 'US Dollar', toCurrency = 'Euro' }) {
  return (
    <footer className={styles.footer}>
      <Link>{baseCurrency}</Link>
      {` to `}
      <Link>{toCurrency}</Link> conversion — Last updated Dec 15, 2022, 19:17
      UTC
    </footer>
  )
}
