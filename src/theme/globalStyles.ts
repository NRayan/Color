import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};
  }

  div{
    display: flex;
    flex-direction: column;
  }

  body {    
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.background};
  }
`