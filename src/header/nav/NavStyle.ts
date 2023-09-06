import styled from "styled-components";
import {bgColor} from "../../common/styles/variables"


export const NavContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration:none;
    color: ${bgColor};
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 200;
    line-height: 1.4;
    cursor: pointer;
    &.active  {
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase
    }
    &:hover{
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase
      
    }
  }
  @media screen and (max-width: 400px) {
    display: none;
`
