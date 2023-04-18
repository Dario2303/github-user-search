import styled from '@emotion/styled'
import React from 'react'
import CloseButton from '../img/close-button.svg'
import User from './User'

const ModalList = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    left: 0;
    top: 0;
    background-color: hsl(0 0% 0% / 0.8);
    padding: 5rem;
    img {
        width: 5rem;
        margin-left: auto;
    }
`

const List = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 80%;
    max-width: 900px;
    
`

const UserList = styled.div`
    height: 100%;
    overflow: auto;
`

const Modal = ({setOpenModal, userList, UserSelected}) => {
  return (
    <ModalList>
        <List>
            <img src={CloseButton} alt="close-button" onClick={() => setOpenModal(false)}/>
            <UserList>
            {userList.map(e => 
            <User
                avatar={e.avatar}
                name={e.name}
                UserSelected={UserSelected}
            />)}
            </UserList>
        </List>
    </ModalList>
  )
}

export default Modal
