import styled from "styled-components";
import { borderColor, bgColor} from "../common/styles/variables"


export const MainContainer = styled.div<MainImageType>`
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
    width: 300px;
    height: 400px;
    background-color: ${bgColor};
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    border: 1px solid ${borderColor};
    &:hover {
      filter: brightness(0.7);
    }
    @media  (max-width: 350px) {
      width: 100%;
    }
  }
  
  @media  (max-width: 830px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
  }
  
`

type MainImageType = {
    image:string
}

