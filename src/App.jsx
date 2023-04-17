import { useEffect, useState } from "react"
import Header from "./components/Header"
import styled from "@emotion/styled"
import Input from "./components/Input"
import UserInfo from "./components/UserInfo"

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

  const [user, setUser] = useState({})
  const [inputUser, setInputUser] = useState('')
  const [theme, setTheme] = useState(false)

  
  const SelectedTheme = () => {
    if (!theme) {
      setTheme(true)
      return
    }
    setTheme(false)
  }

  //API call
  const SearchUser = async ()  => {
    const url = (`https://api.github.com/users/${inputUser}`)
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    setUser(resultado)
  }


  return (
    <Body data-theme={theme ? 'light' : 'dark'}>
      <Form>
        <Header
          theme={theme}
          SelectedTheme={SelectedTheme}
        />
        <Input
          inputUser={inputUser}
          setInputUser={setInputUser}
          SearchUser={SearchUser}
        />
        <UserInfo
          user={user}
        />
      </Form>
    </Body>
  )
}

export default App
