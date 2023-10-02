import { useCurrencyStore } from '../hooks/useCurrencyStore'
import { Footer } from './Footer'
import styles from './Main.module.css'

export function Main({ children }) {
  const { amount, baseCurrency, convertTo, currenciesObj } = useCurrencyStore()

  const baseCurrencyName = currenciesObj[baseCurrency]?.name
  const convertToName = currenciesObj[convertTo]?.name

  return (
    <main className={styles.card}>
      <div className={styles.card__banner}></div>

      <div className={styles.card__title}>
        <h2>
          {`${amount} ${baseCurrency} to ${convertTo} - Convert ${baseCurrencyName} to ${convertToName}`}
        </h2>
      </div>

      <div className={styles.card__content}>{children}</div>

      <div className={styles.card__footer}>
        <div className={styles.footer__content}>
          <Footer />
        </div>
      </div>
    </main>
  )
}
