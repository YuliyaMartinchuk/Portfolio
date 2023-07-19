import styled from "styled-components";

export const ProjectsWrapper = styled.div`

`
export const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  border: black solid 1px;
  flex-direction: column;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;

    @media (max-width: 630px) {
      width: 100%;
      justify-content: center;
    }
  }

  li {
    list-style-type: none;
  }
`



