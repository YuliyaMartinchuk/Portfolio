import styled from "styled-components";


export const ProjectContainer = styled.div`
  width: 250px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid;
  margin: 2% 0;
  @media (max-width: 250px) {
    width: 100%;
  }
`

type ProjectIconsType = {
  backgroundImage:string
}

export const ProjectImage = styled.div<ProjectIconsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  background-image: url(${props => props.backgroundImage});
  background-color: #9e9ea2;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  &:hover {
    filter: brightness(0.7);
  }
`

export const ProjectLink = styled.a`
  background-color: #666667;
  padding: 15px 25px;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    filter: brightness(0.7);
  }
  &:active {
    filter: brightness(1);
  }

`

export const ProjectTitle = styled.h3`
  background-color: rgba(91, 168, 252, 0.84);

  &:hover {
    filter: brightness(0.7);
  }
`

export const ProjectDescription = styled.span`
  background-color: rgba(255, 151, 151, 0.75);
  width: 100%;
  padding-bottom: 10px;
`