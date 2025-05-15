import styles from './input.module.scss'
import { useState } from 'react'

const Input = () => {
  const [input, setInput] = useState('')

  return (
    <form className={styles.inputContainer}>
      <label htmlFor="input">Enter food ingredient</label>
      <input
        className={styles.input}
        type="text"
        id="input"
        required
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className={styles.button} disabled={!input}>
        Submit
      </button>
    </form>
  )
}

export default Input
