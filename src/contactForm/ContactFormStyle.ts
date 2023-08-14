import styled from "styled-components";
import {borderColor, primaryColor, bgColor} from "../common/styles/variables"


export const ContactFormContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid ${borderColor};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4vw;
  display: flex;
  position: relative;

  h2 {
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 55px;
    font-weight: 300;
    line-height: .9;
    color: ${primaryColor};
    word-break: break-all;

    @media (max-width: 500px) {
      font-size: 40px;

    }
  }

  p {
    margin-top: 3%;
    font-size: 40px;
    margin-bottom: 0;
    @media (max-width: 500px) {
      font-size: 30px;

    }

    span {
      text-transform: capitalize;
      font-family: Pinyon Script, sans-serif;
      font-weight: 400;
      line-height: .8;
    }
  }

`

export const ContainerForm = styled.div`
  width: 70%;
  border: none;

  form {
    width: 100%;
    flex-direction: column;
    margin-bottom: 0;
    display: flex;

    h3 {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 18px;
      word-break: break-all;
    }

    input {
      width: 100%;
      height: 50px;
      background-color: rgba(0, 0, 0, 0);
      color: ${borderColor};
      border: 1px rgba(0, 0, 0, .5);
      border-bottom: 1px solid ${borderColor};

      &:focus {
        border-bottom: 2px solid #78788c
      }
    }

    button {
      height: 50px;
      color: ${bgColor};
      text-transform: uppercase;
      background-color: ${borderColor};
      justify-content: center;
      align-items: center;
      margin-top: 3%;
      padding-left: 40px;
      padding-right: 40px;
      font-family: Butler, sans-serif;
      font-size: 13px;
      font-weight: 300;
      transition: color .2s, opacity .2s;
      position: relative;

      &:hover {
        background: ${primaryColor};
        color: #fff
      }
    }
  }

`


