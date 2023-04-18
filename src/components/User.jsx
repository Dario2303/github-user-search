import styled from '@emotion/styled'
import React from 'react'
import cruz from '../img/close-button.svg'

const UserModal = styled.div`

`
const Img = styled.div`
    width: auto;
    border-radius: 100%;
    overflow: hidden;
`

const User = ({avatar, name}) => {
  return (
    <UserModal>
      <Img>
         <img src={avatar} alt="user"/>   
      </Img>
      <p>{name}</p>
    </UserModal>
  )
}

export default User
