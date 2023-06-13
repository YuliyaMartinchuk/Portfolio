import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: rgba(30, 30, 147, 0.89);
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
  background-color: #a27dc4;
  &:hover {
    filter: brightness(0.7);
  }
  @media  (max-width: 350px) {
    width: 80%;
    word-break: break-all;
  }
`

export const FooterContacts = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 45px;
  width: 260px;
  padding: 0;
  margin: 0;
  @media (max-width: 260px) {
    width: 100%;
    padding-bottom: 70px;
   
  }

`
type FooterContactType = {
    image: string
}

export const FooterContact = styled.li<FooterContactType>`
  height: 40px;
  width: 40px;
  list-style-type: none;
  background-color: rgba(30, 30, 147, 0.89);
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  margin: 5px 0 0 0;

  &:hover {
    filter: brightness(0.7);
  }
`

