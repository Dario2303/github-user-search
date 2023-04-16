import styled from '@emotion/styled'
import moon from '../img/icon-moon.svg'
import sun from '../img/icon-sun.svg'

const Head = styled.div `
    display: flex;
    color: var(--font-username)   
`
const TextTheme = styled.p `
  text-transform: uppercase;
  padding-right: 1rem;
`

const ThemeIcon = styled.div `
  &::before{  
    content: '';
    background-image: url(${e => e.img});
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

const Header = ({theme, SelectedTheme}) => {
  
  
  return (
    <Head>
      <h1>devfinder</h1>
      <ThemeMenu>
        <TextTheme>{theme ? 'dark' : 'light'}</TextTheme>
        <ThemeIcon onClick={() => SelectedTheme()} img={theme ? moon : sun}></ThemeIcon>
      </ThemeMenu>
    </Head>
  )
}

export default Header
