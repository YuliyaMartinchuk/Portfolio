import styled from "styled-components";
import {primaryColor} from "../common/styles/variables"

export const FooterWrapper = styled.div`
  padding: 100px 0 30px;

`
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  @media  (max-width: 350px) {
    width: 80%;
  }
`

export const FooterTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 55px;
  font-weight: 300;
  line-height: .9;
  color: ${primaryColor};
  &:hover {
    filter: brightness(0.7);
  }
  @media  (max-width: 350px) {
    width: 70%;
  }
`

export const FooterContacts = styled.ul`
  background-color: aquamarine;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 40px;
  width: 230px;
  padding: 0;
  margin: 0;
  @media (max-width: 260px) {
    width: 100%;
  }
  @media (max-width: 200px) {
    width: 100%;
    padding-bottom: 50px;
  }

`
type FooterContactType = {
    image: string
}

export const FooterContact = styled.li<FooterContactType>`
  height: 40px;
  width: 40px;
  list-style-type: none;
  background-color: rgba(91, 168, 252, 0.84);
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;


  &:hover {
    filter: brightness(0.7);
  }
`

export const FooterInformation = styled.h3`
  background-color: #a27dc4;
  height: 100%;
  margin:  10% 0 0;
`
