import styled from "styled-components";

export const SkillsWrapper = styled.div`

  background-color: #9854e0;

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
  background-color: #a27dc4;

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