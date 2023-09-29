import styles from './Label.module.css'

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  )
}
