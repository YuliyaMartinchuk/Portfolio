import styled from "styled-components";
import {borderColor, primaryColor, primaryTransparentColor} from "../../common/styles/variables"

export const SkillContainer = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${borderColor};
  img {
   justify-content: center;
    margin-top: 6%;
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
    white-space: pre-wrap;

    &:hover {
      filter: brightness(0.7);
    }
  }
  div {
    position: absolute;
    left: -2.5px;
    top: -52.5px;
    width: 10px;
    height: 10px;
    background-color: ${primaryTransparentColor};
    animation: move 5s linear infinite;
    offset-path: path("M 50,50 m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0");
    animation-play-state: paused;

  }
  &:hover div {
    animation-play-state: running;
  }

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(137.5px, 0);
    }
    50% {
      transform: translate(137.5px, -137.5px);
    }
    75% {
      transform: translate(0,-137.5px);
    }
    100% {
      transform: translate(0, 0);
    }

  @media (max-width: 250px) {
    width: 100%;
    height: auto;
  }

  }
`