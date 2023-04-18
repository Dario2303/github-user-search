import styled from '@emotion/styled'
import React from 'react'

const UserModal = styled.div`
    margin-bottom: 2rem;
    cursor: pointer;
    &:hover {
      background-color: hsl(100 100% 100% / 0.3);
    }
`

const UserName = styled.div`
    width: 100%;
    height: 6rem;
    padding: 2rem 8rem;
    p {
      color: white;
    }
` 

const Img = styled.div`
    width: 6rem;
    height: 6rem;
    float: left;
    border-radius: 100%;
    overflow: hidden;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`

const User = ({avatar, name, UserSelected}) => {
  return (
    <UserModal onClick={() => UserSelected(name)}>
      <Img img={avatar}></Img>
      <UserName>
         <p>{name}</p>
      </UserName>
    </UserModal>
  )
}

export default User
