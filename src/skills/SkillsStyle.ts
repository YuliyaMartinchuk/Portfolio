import styled from "styled-components";
import {primaryColor} from "../common/styles/variables"


export const SkillsContainer = styled.div`
  padding-top: 10% ;
  display: flex;
  flex-direction: column;
  text-align: center;
  h2 {
    text-transform: uppercase;
    margin-top: 0;
    font-size: 55px;
    font-weight: 300;
    line-height: .9;
    color: ${primaryColor};
    margin-bottom: 40px;
    &:hover {
      filter: brightness(0.7);
    }
    @media (max-width: 500px) {
      font-size: 40px;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2% 2%;
  }
`


