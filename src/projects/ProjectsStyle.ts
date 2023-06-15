import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  background-color: #7ed7ef;
`

export const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  border: black solid 1px;
  flex-direction: column;
`

export const ProjecstTitle = styled.h2`
  background-color: #a27dc4;

  &:hover {
    filter: brightness(0.7);
  }
`

export const ProjectsElements = styled.ul`
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
`

export const ProjectsElement = styled.li`
  list-style-type: none;
`