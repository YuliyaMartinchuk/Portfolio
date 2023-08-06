import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  flex-direction: row;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  padding: 20px;
  display: grid;
`

export const ContactFormContainer = styled.div`
  width: 100%;
  height: auto;
  grid-row-gap: 10px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #1d1d15;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vw;
  display: flex;
  position: relative;
 
`

export const ContactFormMainTitle = styled.h2`
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  position: sticky;
  font-size: 55px;
  font-weight: 300;
  line-height: .9;
  color: rgba(30, 30, 147);
`

export const ContactFormTitle = styled.h2`
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Butler, sans-serif;
  font-size: 55px;
  font-weight: 300;
  line-height: .9;
  p {
    letter-spacing: 0;
    text-transform: capitalize;
    margin-top: 0;
    font-family: Pinyon Script, sans-serif;
    font-weight: 400;
    line-height: .8;
  }
  @media  (max-width: 350px) {
    width: 80%;
    word-break: break-all;
  }
  
`
export const ContactFormText = styled.h3`
  :before{content:attr(type);
    display:block;
    margin:28px 0 0;
    font-size:14px;
    color:#5a5a5a}
  @media  (max-width: 350px) {
    word-break: break-all;
  }
`

export const ContainerForm = styled.div`
  width: 70%;
`

export const Form = styled.form`
  width: 100%;
  grid-column-gap: 15px;
  flex-direction: row;
  margin-bottom: 0;
  display: flex;
  @media  (max-width: 450px) {
    width: 95%;
    height: 60%;
    
  }
`


export const Field = styled.input`
  width: 100%;
  height: 50px;
  color: #1d1d15;
  background-color: rgba(0, 0, 0, 0);
  border: 1px rgba(0, 0, 0, .5);
  border-bottom: 1px solid #1d1d15;
  flex: 0 auto;
  padding-left: 0;
  &:focus{
    border-bottom:2px solid #78788c
  }
  
`

export const ButtonForm = styled.button`
  height: 50px;
  color: #ebece6;
  text-align: center;
  text-transform: uppercase;
  background-color: #1d1d15;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  font-family: Butler, sans-serif;
  font-size: 13px;
  font-weight: 300;
  transition: color .2s, opacity .2s;
  display: flex;
  position: relative;
  &:hover{
    background:#78788c;
    color:#fff}
  
`