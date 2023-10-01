import styles from './Input.module.css'

export function Input({
  type = 'text',
  name,
  id,
  value,
  onChange,
  prefix = '$'
}) {
  return (
    <div className={styles.input__container}>
      <span className={styles.input__prefix}>{prefix}</span>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  )
}
