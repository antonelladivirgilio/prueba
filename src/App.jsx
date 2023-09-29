import './App.css'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  const bannerContent = `Titulo de la pagina`
  return (
    <>
      <Header text="Currency exchange" />
      <Main bannerContent={bannerContent}>
        <Form />
      </Main>
    </>
  )
}

export default App
