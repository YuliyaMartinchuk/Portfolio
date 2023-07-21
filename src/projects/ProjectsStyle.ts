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
  padding: 100px 0;
  transition: background-color .4s;
  position: relative;

  div {
    display: grid;
    grid-column-gap: 5vw;
    grid-template-columns: 1fr 2fr;

    div {
      grid-row-gap: 30px;

      h2 {
        top: 30vh;
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 0;
        position: sticky;
        font-size: 55px;
        font-weight: 300;
        line-height: .9;
        color: rgba(30, 30, 147);

        &:hover {
          filter: brightness(0.7);
        }
      }

      p {
        top: 40vh;
        position: sticky;
        margin-top: 0;
        margin-bottom: 10px;
        width: 100%;
      }
    }

    div {
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: flex-start;
      display: flex;
      position: relative;
      //@media (max-width: 630px) {
      //  width: 100%;
      //  justify-content: center;
      //}
    }

  }


`



