import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 250px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

type SkillIconsType = {
  backgroundImage:string
}

export const SkillImage = styled.div<SkillIconsType>`
  height: 60px;
  width: 60px;
  background-color: #f3ecec;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  &:hover {
    filter: brightness(0.7);
  }
`

export const SkillTitle = styled.h3`
  background-color: rgba(91, 168, 252, 0.84);
  &:hover {
    filter: brightness(0.7);
  }
`

export const SkillDescription = styled.span`
  background-color: rgba(255, 151, 151, 0.75);
  width: 100%;
  padding-bottom: 10px;
`