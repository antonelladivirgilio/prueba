import styles from './Main.module.css'

export function Main({ bannerContent, children }) {
  return (
    <main className={styles.card}>
      <div className={styles.card__banner}>
        <div>{bannerContent}</div>
      </div>
      <section className={styles.card__content}>{children}</section>
      <footer className={styles.card__footer}>algo</footer>
    </main>
  )
}
