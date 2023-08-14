import styled from "styled-components";
import {borderColor, primaryColor} from "../../common/styles/variables"

export const SkillContainer = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${borderColor};
  img {
    margin-top: 2%;
    height: 60px;
    width: 60px;
    background-color: rgba(0, 0, 0, 0);
    object-fit: cover;
    &:hover {
      transform: scale(1.1);
    }
  }
  p {
    margin-bottom: 2%;
    font-weight: 600;
    color: ${primaryColor};
    width: 100%;
    font-family: Poppins, sans-serif;
    word-break: break-word;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media (max-width: 250px) {
    width: 100%;
  }
`

