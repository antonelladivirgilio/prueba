import { ChevronDown } from './Icons'
import styles from './Select.module.css'

export function Select({ id, name, onChange, value, children }) {
  return (
    <div className={styles.select__container}>
      <select
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className={styles.select}
      >
        {children}
      </select>
      <span className={styles.select__chevron}>
        <span className={styles['select__chevron--down']}>
          <ChevronDown />
        </span>
      </span>
    </div>
  )
}
