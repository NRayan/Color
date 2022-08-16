import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Poppins', Verdana, sans-serif;
    padding: 0;
    margin: 0;
  }

  *:focus {
    outline: none;
  }

  html{
    font-size: 62.5%;
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

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`