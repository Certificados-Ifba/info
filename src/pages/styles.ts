import styled from 'styled-components'

export const Container = styled.div`
  background-color: #379936;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 20px 24px;
  max-width: 1095px;
  h1 {
    font: 600 32px Poppins, sans-serif;
    color: #FFFFFF;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  h2 {
    font: 600 20px Poppins, sans-serif;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 14px;
  }
  a {
    color: #FAFAFC;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 426px) {
    div {
      img {
        width: auto;
      }
    }
  }
  @media (min-width: 1095px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 32px;
    }
  }
`
