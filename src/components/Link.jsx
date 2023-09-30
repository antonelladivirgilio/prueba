import styles from './Link.module.css'

export function Link({ url, target = '_blank', children }) {
  return (
    <a href={url} target={target} className={styles.link}>
      {children}
    </a>
  )
}
