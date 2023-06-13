import styled from "styled-components";

export const MainWrapper = styled.div`
  border: black 1px solid;
  height: 100vh;
  background-color: aquamarine;
`
export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: black solid 1px;
  
  @media  (max-width: 830px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
  }
  
`

export const MainText = styled.div`
  width: 350px;
  background-color: #f3ecec;
  @media  (max-width: 350px) {
    width: 100%;
    word-break: break-all;
  }
`

type MainImageType = {
    image:string
}

export const MainImage = styled.div<MainImageType>`
  width: 300px;
  height: 400px;
  background-color: #f3ecec;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  &:hover {
    filter: brightness(0.7);
  }
  @media  (max-width: 350px) {
    width: 100%;
  }
`