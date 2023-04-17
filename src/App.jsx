import { useEffect, useState } from "react"
import Header from "./components/Header"
import styled from "@emotion/styled"
import Input from "./components/Input"

const Form = styled.div`
  max-width: 730px;
  width: 90%;
  margin: 0 auto;
`

const Body = styled.div`
  padding-top: 10%;
  background-color: var(--background);
  transition: background-color 300ms ease-in-out;
  width: 100%;
  height: 100vh;
`

function App () {

  const [theme, setTheme] = useState(false)
  
  const SelectedTheme = () => {
    if (!theme) {
      setTheme(true)
      return
    }
    setTheme(false)
  }

  //API call
  useEffect(() => {
    const llamar = async ()  => {
      const url = ('https://api.github.com/users/dario2303')
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      console.log(resultado)
    }
    llamar()
  }, [])

  return (
    <Body data-theme={theme ? 'light' : 'dark'}>
      <Form>
        <Header
          theme={theme}
          SelectedTheme={SelectedTheme}
        />
        <Input

        />
      </Form>
    </Body>
  )
}

export default App
