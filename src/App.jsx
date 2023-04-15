import { useEffect } from "react"
import Header from "./components/Header"



function App() {

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
    <div className="app" data-theme="dark">
      <Header/>
    </div>
  )
}

export default App
