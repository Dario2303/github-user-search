import React from 'react'
import styled from '@emotion/styled'
import imagen from '../img/icon-moon.svg'

const Head = styled.div `
    display: flex;   
`
const DarkLight = styled.p `
  text-transform: uppercase;
`

const ThemeIcon = styled.div `
  &::before{  
    content: '';
    background-image: url(${imagen});
    background-repeat: no-repeat;
    background-position: center;
    width: 3rem;
    height: 3rem;
    display: block;
    }
`

const ThemeMenu = styled.div `
  display: flex;
  margin-left: auto;
  align-items: center;
`

const Header = () => {
  return (
    <Head>
      <h1>devfinder</h1>
      <ThemeMenu>
        <DarkLight>dark</DarkLight>
        <ThemeIcon></ThemeIcon>
      </ThemeMenu>
    </Head>
  )
}

export default Header
