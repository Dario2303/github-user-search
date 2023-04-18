import styled from '@emotion/styled'
import React from 'react'
import Search from '../img/icon-search.svg'

const InputBox = styled.div`
    display: flex;
    height: 6rem;
    background-color: var(--form-background);
    border-radius: 1rem;
    @media (min-width: 768px) { 
        height: 6.9rem;
    }
`
const SearchIcon = styled.div`
    &::before{
        content: '';
        width: 5rem;
        height: 3rem;
        background-image: url(${Search});
        background-repeat: no-repeat;
        background-position: center;
        padding-top: 4rem;
        background-size: 2.2rem;
        display: block;
        cursor: pointer;
    }

    &:hover {
        transform: scale(1.1);
        transition: transform 100ms ease-in-out;
    }
    &:active {
        transform: scale(1.15);
    }
`

const UserInput = styled.input `
    background: transparent;
    border: none;
    width: 100%;
`

const NoResult = styled.div `
    display: none;
    p {
        color: red;
    }

    @media (min-width: 768px) {
        width : 15rem;
        display: flex;
        align-items: center;
    }
`

const SearchButton= styled.button `
    background-color: var(--search-button);
    color: white;
    width: 14rem;
    margin: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`

const Input = ({inputUser, setInputUser, SearchUser, error, OpenModal}) => {

  return (
    <InputBox>
        <SearchIcon onClick={() => OpenModal()}></SearchIcon>
        <UserInput type="input" 
                    placeholder='Search GitHub username...'
                    value={inputUser}
                    onChange={e => setInputUser(e.target.value)}/>
        {error && <NoResult><p>No results</p></NoResult>}

        <SearchButton onClick={() => SearchUser()}>Search</SearchButton>
    </InputBox>
  )
}

export default Input
