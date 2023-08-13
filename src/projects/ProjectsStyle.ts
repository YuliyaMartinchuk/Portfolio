import styled from "styled-components";
import {textColor,primaryColor} from "../common/styles/variables"


export const ProjectsContainer = styled.div`
  padding: 10% 0;
  display: grid;
  grid-column-gap: 5vw;
  grid-template-columns: 1fr 3fr;
    div {
      grid-row-gap: 30px;
      margin-bottom: 40px;
      h2 {
        top: 30vh;
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 0;
        position: sticky;
        font-size: 55px;
        font-weight: 300;
        line-height: .9;
        color: ${primaryColor};
        @media (max-width: 500px) {
          font-size: 40px;

        }
        p {
          font-family: Poppins, sans-serif;
          margin-top: 2vh;
          text-transform: none;
          position: sticky;
          font-size: 20px;
          color: ${textColor};
          line-height: 1.2;
        }

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
    div {
      width: 100%;
      position: relative;
    }
  @media (max-width: 767px) {
    grid-column-gap: 3vw;
    grid-template-columns: 1fr;
  }
  

`



