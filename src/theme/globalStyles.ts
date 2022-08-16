import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Poppins', Verdana, sans-serif;
    padding: 0;
    margin: 0;
  }

  div{
    display: flex;
    flex-direction: column;
  }

  body {   
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.background};
  }
`