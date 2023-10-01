import styles from './Feedback.module.css'

export function Feedback({ type, children }) {
  return <span className={styles[type]}>{children}</span>
}
