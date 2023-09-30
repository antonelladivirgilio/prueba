import styles from './App.module.css'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  return (
    <div className={styles.container}>
      <Header text="Currency exchange" />
      <Main>
        <Form />
      </Main>
    </div>
  )
}

export default App
