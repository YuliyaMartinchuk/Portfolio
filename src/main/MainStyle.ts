import styled from "styled-components";
import { borderColor, bgColor} from "../common/styles/variables"


export const MainContainer = styled.div`
  padding-top: 100px;
  border: black 1px solid;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  div {
    width: 400px;
    text-align: center;
    font-size: 55px;
    font-weight: 300;
    line-height: 1.1;
    font-family: Butler, sans-serif;
    color: ${bgColor};
    p {
      span {
        font-family: Pinyon Script, sans-serif;
        color: ${bgColor};
        letter-spacing: 0.1em;
      }
    }
    span {
    }
    @media  (max-width: 500px) {
      width: 100%;
      word-wrap: break-word;
      overflow-wrap: break-word;
      font-size: 40px;
  }}
  img {
    width: 800px;
    height: 950px;
    filter: brightness(0.85);
    object-fit: cover;  
    transition: opacity 0.3s ease;
    background: transparent;
    align-self: flex-end;
    &:hover {
      filter: brightness(0.7);
    }
    @media  (max-width: 550px) {
      width: 90%;
      height: 450px;
    }
  }
  
  @media  (max-width: 930px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
  }
  
`


