import { Footer } from './Footer'
import styles from './Main.module.css'

export function Main({ bannerContent, children }) {
  return (
    <main className={styles.card}>
      <div className={styles.card__banner}>
        <div>
          <h2 className={styles.card__title}>{bannerContent}</h2>
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
