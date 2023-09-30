import styles from './Input.module.css'

export function Input({ type = 'text', name, id, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  )
}
