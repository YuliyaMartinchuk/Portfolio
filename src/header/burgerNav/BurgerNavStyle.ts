import styled from "styled-components";
import {primaryTransparentColor,bgColor} from "../../common/styles/variables"


export const BurgerNavContainer = styled.div`
  div.burgerNavItems {
    width: 100%;
    height: 100%;

    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
  
    right: 0;
    left: 0;
    top: 0;
    padding: 20px;
    background-color: ${primaryTransparentColor};
    transform: translate(0, -150px);
    transition: 0.7s;

  }

  div.show {
   
    transform: translate(0, 0);
    height: 140px;

    a {
      text-decoration: none;
      color: ${bgColor};
      font-family: Poppins, sans-serif;
      font-size: 14px;
      font-weight: 200;
      line-height: 1.4;
      cursor: pointer;

      &.active {
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase
      }

      &:hover {
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase

      }
    }
  }

  div {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 26px;
    right: 30px;

    img {
      height: 30px;
      width: 30px;
    }
  }

  @media screen and (min-width: 400px) {
    display: none;
  }
`
