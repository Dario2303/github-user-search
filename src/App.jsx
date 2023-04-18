import { useEffect, useState } from "react"
import Header from "./components/Header"
import styled from "@emotion/styled"
import Input from "./components/Input"
import UserInfo from "./components/UserInfo"
import Modal from "./components/Modal"

const Form = styled.div`
  max-width: 730px;
  width: 90%;
  margin: 0 auto;
`

const Body = styled.div`
  padding-top: 5rem;
  background-color: var(--background);
  transition: background-color 300ms ease-in-out;
  width: 100%;
  height: 100vh;
`

function App () {
  
  const [user, setUser] = useState({});
  const [openModal, setOpenModal] = useState(false)
  const [userList, setUserList] = useState([])
  const [inputUser, setInputUser] = useState('');
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);

  const SelectedTheme = () => {
    if (!theme) {
      setTheme(true)
      return
    }
    setTheme(false)
  }
  
  //open users list

  const OpenModal = () => {
    setOpenModal(true)
  }

  useEffect(() => {
    const UserList = async () => {
      const url = ('https://api.github.com/users')
      const respuesta = await fetch(url)
      const resultado = await respuesta.json();
     
      const list = resultado.map(e => 
            ({name: e.login, 
              avatar: e.avatar_url}) 
        )
        setUserList(list)
    }
    UserList()
  },[])

  //API call
  const SearchUser = async ()  => {
    setLoading(true)
    setUser({})
      const url = (`https://api.github.com/users/${inputUser}`);
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      if (resultado.name) {
        setUser(resultado)
        setLoading(false)
        setError(false)
        return
      }else{
        setUser({})
        setError(true)
        setLoading(false)
      }
  }

  return (
    <Body data-theme={theme ? 'light' : 'dark'}>
      {loading ? 
      (<div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>)
      :
      (<Form>
        <Header
          theme={theme}
          SelectedTheme={SelectedTheme}
        />
        <Input
          error={error}
          inputUser={inputUser}
          setInputUser={setInputUser}
          SearchUser={SearchUser}
          OpenModal={OpenModal}
        />
        {user.name && <UserInfo
          user={user}
        />}
      </Form>)  
      }
      {openModal && <Modal
                    setOpenModal={setOpenModal}
                    userList={userList}
                    />}
    </Body>
  )
}

export default App
