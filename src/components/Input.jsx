import styled from '@emotion/styled'
import React from 'react'
import Search from '../img/icon-search.svg'

const InputBox = styled.div`
    display: flex;
`
SearchIcon = styled.div`
    content: '';
    width: 2rem;
    height: 2rem;
    background-image: url(${Search});
    display: block;
`

const Input = () => {
  return (
    <InputBox>
      <SearchIcon></SearchIcon>
      <input type="input"/>
      <div>No results</div>
      <button>Search</button>
    </InputBox>
  )
}

export default Input
