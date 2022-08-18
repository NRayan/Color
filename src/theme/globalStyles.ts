import { createGlobalStyle } from 'styled-components'
import blob1 from "../assets/blob1.svg"
import blob2 from "../assets/blob2.svg"
import blob3 from "../assets/blob3.svg"

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

  @media (max-width:1024px) {
      html{
        font-size: 50%;
      }
  } 

  @media (max-width:768px) {
      html{
        font-size: 40%;
      }
  } 
  
  div{
    display: flex;
    flex-direction: column;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    background:
    url(${blob1}) left top no-repeat,
    url(${blob2}) left bottom no-repeat,
    url(${blob3}) right bottom no-repeat;
    background-size: 20rem,35rem, 15rem;
  }
  
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
`