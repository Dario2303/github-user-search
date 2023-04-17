import styled from '@emotion/styled'
import moon from '../img/icon-moon.svg'
import sun from '../img/icon-sun.svg'

const Head = styled.div `
    display: flex;
    color: var(--font-username);   
`;

const ThemeIcon = styled.div `
  &::before{  
    content: '';
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    width: 3rem;
    height: 3rem;
    display: block;
    cursor: pointer;
    }
`;

const TextTheme = styled.p `
  text-transform: uppercase;
  padding-right: 1rem;
`;


const ThemeMenu = styled.div `
  display: flex;
  margin-left: auto;
  align-items: center;
  opacity: 0.2;

  &:hover {
    opacity: 1;
    transition: opacity 300ms ease;
  }
`;

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
