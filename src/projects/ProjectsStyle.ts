import styled from "styled-components";


export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 100px 10vw;
  transition: background-color .4s;
  position: relative;

  div {
    grid-auto-columns: 1fr;
    display: grid;
    width: 100%;
    grid-column-gap: 5vw;
    grid-row-gap: 0;
    grid-template-rows: auto;
    grid-template-columns: 1fr 2fr;

    div {
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: flex-start;
      display: flex;
      position: relative;
      grid-row-gap: 30px;
      align-items: flex-start;
      

      h2 {
        top: 30vh;
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 55px;
        font-weight: 300;
        line-height: .9;
        display: block;
        position: -webkit-sticky;
        position: sticky;
      }
    }

    div {

      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: flex-start;
      display: flex;
      position: relative;
      @media (max-width: 630px) {
        width: 100%;
        justify-content: center;
      }
    }

  }


`



