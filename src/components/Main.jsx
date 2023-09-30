import { useCurrencyStore } from '../hooks/useCurrencyStore'
import { Footer } from './Footer'
import styles from './Main.module.css'

export function Main({ children }) {
  const { amount, baseCurrency, convertTo, currenciesObj } = useCurrencyStore()

  const baseCurrencyName = currenciesObj[baseCurrency]?.name
  const convertToName = currenciesObj[convertTo]?.name

  return (
    <main className={styles.card}>
      <div className={styles.card__banner}>
        <div>
          <h2 className={styles.card__title}>
            {`${amount} ${baseCurrency} to ${convertTo} - Convert ${baseCurrencyName} to ${convertToName}`}
          </h2>
        </div>
      </div>
      <div className={styles.card__content}>{children}</div>
      <div className={styles.card__footer}>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  )
}
