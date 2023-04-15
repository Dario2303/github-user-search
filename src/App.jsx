import styled from "@emotion/styled"
import { useEffect } from "react"

const Hola = styled.h1 `
  color: green;
`

function App() {

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
    <div>
      <Hola>desde app</Hola>
    </div>
  )
}

export default App
