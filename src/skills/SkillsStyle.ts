import styled from "styled-components";
import {primaryColor} from "../common/styles/variables"

export const SkillsWrapper = styled.div`
 
`
export const SkillsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  border: black solid 1px;
  flex-direction: column;
  text-align: center;
`

export const SkillsTitle = styled.h2`
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 55px;
  font-weight: 300;
  line-height: .9;
  color: ${primaryColor};
  &:hover {
    filter: brightness(0.7);
  }
`

export const SkillsElements = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  @media (max-width: 940px) {
    width: 100%;
    justify-content: center;
  }
`

export const SkillsElement = styled.li`
  list-style-type: none;
`