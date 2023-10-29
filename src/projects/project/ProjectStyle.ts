import styled from "styled-components";
import {
    bgColor,
    borderColor,
    hrefColor,
    primaryColor, textColor
} from "../../common/styles/variables"


export const ProjectContainer = styled.div`
  border: 1px solid ${borderColor};
  padding: 3%;
  display: grid;
  grid-column-gap: 3vw;
  grid-row-gap: 3vw;
  grid-template-columns: 300px 1fr;


  div {
    display: flex;
    position: relative;
    margin-bottom: 0;
   
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border: 1px solid ${borderColor};
      &:hover {
        filter: brightness(0.7);
      }
    }

    a {
      text-decoration: none;
      &.project-link {
        color: ${borderColor};
        font-size: 16px;
        font-weight: 500;
        background-color: ${hrefColor};
        font-family: Poppins, sans-serif;
        padding: 15px 25px;
        cursor: pointer;
        line-height: 1.4;
        opacity: 0.7;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        &:hover {
          opacity: 1;
          background-color: ${primaryColor};
          color: ${bgColor};
        }
        &:active {
          filter: brightness(1);
        }
      }
     
     
    }
  }

  div {
    flex-direction: column;
    align-items: flex-start;
    display: flex;

   h3 {
     color: ${textColor};
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-top: 0;
      margin-bottom: 0;
      font-family: Poppins, sans-serif;
      font-size: 20px;
      font-weight: 600;
     
      &:hover {
        color: ${primaryColor};
      }
    }

    p {
      margin-top: 0;
      margin-bottom: 10px;
      width: 100%;
      font-family: Poppins, sans-serif;
      word-break: break-word;
      
    }
  }
  
@media (max-width: 991px) {
  grid-template-columns: 1fr;
}
`;



