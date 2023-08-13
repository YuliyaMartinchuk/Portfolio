import styled from "styled-components";
import {primaryColor} from "../common/styles/variables"
import {primaryTransparentColor} from "../common/styles/variables"

export const FooterContainer = styled.div`
  padding: 100px 0 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    margin-top: 0;
    margin-bottom: 40px;
    font-size: 55px;
    font-weight: 300;
    line-height: .9;
    color: ${primaryColor};

    &:hover {
      filter: brightness(0.7);
    }
  }

  div {

  }

  span {
    height: 100%;
    margin: 5% 0 0;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 18px;
  }

  @media (max-width: 350px) {
    width: 80%;
  }
`


export const FooterContacts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 40px;
  width: 230px;
  padding: 0;
  margin: 0;

  a {
    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;

      &:hover {
        background-color: ${primaryTransparentColor};
        transform: scale(1.1);
      }
    }

    @media (max-width: 200px) {
      width: 100%;
      padding-bottom: 50px;
    }

`


